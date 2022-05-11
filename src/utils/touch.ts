import { EventEmitter } from 'events';

export class SwipeEvent extends EventEmitter implements SwipeEvent {
  protected elements: Array<Document | Element | Window> = [];
  protected moveIng = false;
  protected isSend = false;
  protected xDown = 0;
  protected yDown = 0;
  protected xStart = 0;
  protected yStart = 0;
  protected xCurrent = 0;
  protected yCurrent = 0;
  protected currentDirection?: string;
  constructor(
    public selector: Window | Element | Document | string,
    public options: SwipeEventOptions = {}
  ) {
    super();

    this.options = options = {
      ...options,
    };

    if (typeof selector === 'string')
      document
        .querySelectorAll(selector)
        .forEach(this.eventListener.bind(this));
    else this.eventListener(selector);
  }
  /**掛載事件 */
  public eventListener(element: Window | Element | Document): void {
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
  /**獲取 X, Y */
  protected getTouches(event: TouchEvent) {
    const touch = event.touches ? event.touches[0] : void 0;

    return {
      offsetX: ~~(touch?.clientX || 0),
      offsetY: ~~(touch?.clientY || 0),
    };
  }
  /**按下觸發 */
  protected handleTouchStart(event: TouchEvent) {
    const touche = this.getTouches(event);

    this.moveIng = true;
    this.xDown = touche.offsetX;
    this.yDown = touche.offsetY;
    this.xStart = touche.offsetX;
    this.yStart = touche.offsetY;

    this.emit('start', event);
  }
  /**開始移動觸發 */
  protected handleTouchMove(event: TouchEvent) {
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
  /**發送現在移動模式 */
  protected setDirection(event: TouchEvent, xDiff: number, yDiff: number) {
    let type: swipeEventsType;
    if (this.isSend) return;

    if (Math.abs(xDiff) >= Math.abs(yDiff)) {
      if (xDiff > 0) type = 'left';
      else type = 'right';
    } else {
      if (yDiff > 0) type = 'up';
      else type = 'down';
    }
    this.isSend = true;
    this.emit(type, event);
  }
  public handleTouchEnd(event: TouchEvent) {
    this.isSend = false;
    this.emit('stop', event);
  }
  /**移除所有監聽事件 */
  public destroy() {
    this.removeAllListeners();
    this.elements.forEach((element) => {
      element.removeEventListener(
        'mousedown',
        <listenerExtends>this.handleTouchStart.bind(this)
      );
      element.removeEventListener(
        'touchstart',
        <listenerExtends>this.handleTouchStart.bind(this)
      );
      element.removeEventListener(
        'mousemove',
        <listenerExtends>this.handleTouchMove.bind(this)
      );
      element.removeEventListener(
        'touchmove',
        <listenerExtends>this.handleTouchMove.bind(this)
      );
      element.removeEventListener(
        'mouseup',
        <listenerExtends>this.handleTouchEnd.bind(this)
      );
      element.removeEventListener(
        'touchend',
        <listenerExtends>this.handleTouchEnd.bind(this)
      );
    });
  }
}

/**所有事件+參數 */
export interface SwipeEvents extends Record<swipeEventsType, [TouchEvent]> {
  start: [TouchEvent];
  stop: [TouchEvent];
  drag: [TouchEvent];
}

/**事件擴展 */
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

/**事件類型 */
type swipeEventsType = 'left' | 'right' | 'up' | 'down';

/**自訂事件擴展 */
type listenerExtends = (
  this: HTMLElement,
  ev: HTMLElementEventMap[keyof HTMLElementEventMap]
) => unknown;

// 尚無選項
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SwipeEventOptions {}
