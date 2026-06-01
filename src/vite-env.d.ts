/// <reference types="vite/client" />

// vite-imagetools query-string imports.
// `?as=picture` returns a structured object; everything else stays a URL string.
declare module "*&as=picture" {
  const out: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default out;
}
declare module "*?as=picture" {
  const out: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default out;
}