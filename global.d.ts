declare module 'react/jsx-runtime' {
  export * from 'react';
}

declare namespace React {
  type ReactNode = any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
