export interface NavBarItem {
  icon: string;
  name: string;
  link: string;
}

export const NAVBAR_ITEMS: NavBarItem[] = [
  {
    icon: `
      <svg width="100%" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="block m-auto">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M28 22C31.3137 22 34 19.3137 34 16C34 12.6863 31.3137 10 28 10C24.6863 10 22 12.6863 22 16C22 19.3137 24.6863 22 28 22Z"
          fill="currentColor" />
      </svg>
    `,
    name: '總覽',
    link: 'overview',
  },
  {
    icon: `
        <path
          d="M32 7L21 13L25 15.18V21.18L32 25L39 21.18V15.18L41 14.09V21H43V13L32 7ZM38.82 13L32 16.72L25.18 13L32 9.28L38.82 13ZM37 19.99L32 22.72L27 19.99V16.27L32 19L37 16.27V19.99Z"
          fill="currentColor"
        />
    `,
    name: '我的班級',
    link: 'class',
  },
  {
    icon: `
        <path
          d="M40 6L24 6C22.9 6 22.01 6.9 22.01 8L22 26L26 22H40C41.1 22 42 21.1 42 20V8C42 6.9 41.1 6 40 6ZM40 20H25.17L24 21.17V8H40V20ZM34 14.6L37 17V11L34 13.4V11H27V17H34V14.6Z"
          fill="currentColor"
        />
    `,
    name: '我的課堂',
    link: 'lesson',
  },
  {
    icon: `
      <path
        d="M39 8H34.82C34.4 6.84 33.3 6 32 6C30.7 6 29.6 6.84 29.18 8H25C23.9 8 23 8.9 23 10V24C23 25.1 23.9 26 25 26H39C40.1 26 41 25.1 41 24V10C41 8.9 40.1 8 39 8ZM32 7.75C32.41 7.75 32.75 8.09 32.75 8.5C32.75 8.91 32.41 9.25 32 9.25C31.59 9.25 31.25 8.91 31.25 8.5C31.25 8.09 31.59 7.75 32 7.75ZM39 24H25V10H39V24Z"
        fill="currentColor"
      />
      <path
        d="M35.08 16.03L32.96 13.91L27 19.86V22H29.1L35.08 16.03Z"
        fill="currentColor"
      />
      <path
        d="M36.85 14.27C37.05 14.07 37.05 13.76 36.85 13.56L35.44 12.15C35.24 11.95 34.93 11.95 34.73 12.15L33.67 13.21L35.79 15.33L36.85 14.27Z"
        fill="currentColor"
      />
    `,
    name: '我的筆記',
    link: 'note',
  },
  {
    icon: `
      <path
        d="M24 10H22V24C22 25.1 22.9 26 24 26H38V24H24V10ZM40 6L28 6C26.9 6 26 6.9 26 8V20C26 21.1 26.9 22 28 22H40C41.1 22 42 21.1 42 20V8C42 6.9 41.1 6 40 6ZM40 20H28V8H40V20ZM33.51 14.16C33.92 13.43 34.69 13 35.14 12.36C35.62 11.68 35.35 10.42 34 10.42C33.12 10.42 32.68 11.09 32.5 11.65L31.13 11.08C31.51 9.96 32.52 9 33.99 9C35.22 9 36.07 9.56 36.5 10.26C36.87 10.86 37.08 11.99 36.51 12.83C35.88 13.76 35.28 14.04 34.95 14.64C34.82 14.88 34.77 15.04 34.77 15.82H33.25C33.26 15.41 33.19 14.74 33.51 14.16ZM32.95 17.95C32.95 17.36 33.42 16.91 34 16.91C34.59 16.91 35.04 17.36 35.04 17.95C35.04 18.53 34.6 19 34 19C33.42 19 32.95 18.53 32.95 17.95Z"
        fill="currentColor"
      />
    `,
    name: '試題庫',
    link: 'exam',
  },
];

export function getNavBarIndex(path: string) {
  return NAVBAR_ITEMS.findIndex((item) => item.link === path.split('/')[2]);
}
