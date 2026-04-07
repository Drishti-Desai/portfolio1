declare module '@studio-freight/lenis' {
  interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smooth?: boolean;
  }

  class Lenis {
    constructor(opts?: LenisOptions);
    raf(time?: number): void;
    scrollTo(target: number | Element | string, opts?: { duration?: number }): void;
    destroy(): void;
  }

  export default Lenis;
}
