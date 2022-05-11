import { EventEmitter } from 'events';

type swipeEventsType = 'left' | 'right' | 'up' | 'down';

type listenerExtends = (
  this: HTMLElement,
  ev: HTMLElementEventMap[keyof HTMLElementEventMap]
) => unknown;

export interface SwipeEventOptions {
  mode: swipeEventsType;
}

export class SwipeEvent extends EventEmitter {
  protected moveIng = false;
  protected xDown = 0;
  protected yDown = 0;
  protected xStart = 0;
  protected yStart = 0;
  protected xCurrent = 0;
  protected yCurrent = 0;
  protected currentDirection?: string;
  constructor(
    public selector: Element | Document | string,
    public options: SwipeEventOptions = {
      mode: 'right',
    }
  ) {
    super();

    if (typeof selector === 'string')
      document
        .querySelectorAll(selector)
        .forEach(this.eventListener.bind(this));
    else this.eventListener(selector);
  }
  /**掛載事件 */
  public eventListener(element: Element | Document): void {
    element.addEventListener(
      'mousedown',
      <listenerExtends>this.handleTouchStart.bind(this)
    );
    element.addEventListener(
      'touchstart',
      <listenerExtends>this.handleTouchStart.bind(this)
    );
    element.addEventListener(
      'mousemove',
      <listenerExtends>this.handleTouchMove.bind(this)
    );
    element.addEventListener(
      'touchmove',
      <listenerExtends>this.handleTouchMove.bind(this),
      { passive: false }
    );
    element.addEventListener(
      'mouseup',
      <listenerExtends>this.handleTouchEnd.bind(this)
    );
    element.addEventListener(
      'touchend',
      <listenerExtends>this.handleTouchEnd.bind(this)
    );
  }
  protected getTouches(event: TouchEvent) {
    const touch = event.touches ? event.touches[0] : void 0;

    return {
      offsetX: ~~(touch?.clientX || 0),
      offsetY: ~~(touch?.clientY || 0),
    };
  }
  public handleTouchStart(event: TouchEvent) {
    const touche = this.getTouches(event);

    this.moveIng = true;
    this.xDown = touche.offsetX;
    this.yDown = touche.offsetY;
    this.xStart = touche.offsetX;
    this.yStart = touche.offsetY;

    this.emit('start', event);
  }
  public handleTouchMove(event: TouchEvent) {
    if (!this.moveIng) return false;

    const touche = this.getTouches(event);

    this.xCurrent = touche.offsetX - this.xStart;
    this.yCurrent = touche.offsetY - this.yStart;

    const xDiff = this.xDown - touche.offsetX;
    const yDiff = this.yDown - touche.offsetY;

    if (!this.currentDirection) this.setDirection(event, xDiff, yDiff);

    this.emit('drag', event);

    if (!this.xDown || !this.yDown) return false;

    this.setDirection(event, xDiff, yDiff);

    this.xDown = this.yDown = 0;
  }
  public setDirection(event: TouchEvent, xDiff: number, yDiff: number) {
    let type: swipeEventsType;
    if (Math.abs(xDiff) >= Math.abs(yDiff)) {
      if (xDiff > 0) type = 'left';
      else type = 'right';
    } else {
      if (yDiff > 0) type = 'up';
      else type = 'down';
    }
    this.emit(type, event);
  }
  public handleTouchEnd(event: TouchEvent) {
    this.moveIng = false;
    this.emit('stop', event);
  }
}

export interface SwipeEvents extends Record<swipeEventsType, [TouchEvent]> {
  start: [TouchEvent];
  stop: [TouchEvent];
  opened: [TouchEvent];
  closed: [TouchEvent];
  drag: [TouchEvent];
}

export interface SwipeEvent {
  on<K extends keyof SwipeEvents>(
    eventName: K,
    listener: (...args: SwipeEvents[K]) => void
  ): this;
  on(eventName: string | symbol, listener: (...args: unknown[]) => void): this;

  once(
    eventName: string | symbol,
    listener: (...args: unknown[]) => void
  ): this;
  once<K extends keyof SwipeEvents>(
    eventName: K,
    listener: (...args: SwipeEvents[K]) => void
  ): this;

  emit(eventName: string | symbol, ...args: unknown[]): boolean;
  emit<K extends keyof SwipeEvents>(
    eventName: K,
    ...args: SwipeEvents[K]
  ): boolean;
}
