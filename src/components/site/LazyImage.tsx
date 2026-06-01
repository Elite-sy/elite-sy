import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  /**
   * Distance from the viewport at which the image starts loading.
   * @default "200px"
   */
  rootMargin?: string;
  /**
   * Fade-in once the image has loaded. @default true
   */
  fadeIn?: boolean;
};

/**
 * Off-screen image with IntersectionObserver-driven lazy loading.
 *
 * - Defers network fetch until the image is within `rootMargin` of the viewport
 *   (default 200px) — works even where `loading="lazy"` is throttled or ignored.
 * - Always sets `loading="lazy"` and `decoding="async"` as a safety net.
 * - Server-side render still emits the real `src` so crawlers / no-JS clients
 *   see the image, but a `data-src` swap pattern is used on the client so the
 *   browser only opens the connection once visible.
 * - Adds a fade-in once the image has finished decoding to avoid pop-in.
 *
 * Use for any image that may appear below the initial viewport. Keep the
 * native `<img>` (or `<Picture priority>`) for above-the-fold heroes.
 */
export function LazyImage({
  src,
  alt,
  rootMargin = "200px",
  fadeIn = true,
  className,
  onLoad,
  ...rest
}: Props) {
  const ref = useRef<HTMLImageElement | null>(null);
  // Start un-loaded on the client; SSR emits the real src so it stays SEO-friendly.
  const [shouldLoad, setShouldLoad] = useState(
    typeof window === "undefined" || typeof IntersectionObserver === "undefined",
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const node = ref.current;
    if (!node) return;

    // If the browser already restored the image from cache, skip the observer.
    if (node.complete && node.naturalWidth > 0) {
      setShouldLoad(true);
      setLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad, rootMargin]);

  return (
    <img
      ref={ref}
      // 1×1 transparent GIF as placeholder; preserves layout via width/height.
      src={
        shouldLoad
          ? src
          : "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      }
      data-src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={cn(
        fadeIn && "transition-opacity duration-500",
        fadeIn && (loaded ? "opacity-100" : "opacity-0"),
        className,
      )}
      {...rest}
    />
  );
}