import type { ImgHTMLAttributes } from "react";

// Shape returned by vite-imagetools when imported with `?as=picture&format=avif;webp;jpg&w=...`.
export type PictureSource = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & {
  source: PictureSource;
  alt: string;
  /**
   * sizes attribute for responsive selection.
   * Defaults to full viewport width.
   */
  sizes?: string;
  /**
   * If true, marks the image as the LCP candidate:
   * fetchPriority="high", loading="eager", decoding="async".
   * Otherwise loads lazily.
   */
  priority?: boolean;
};

/**
 * Responsive <picture> with AVIF → WebP → JPG fallback.
 * Pair with imports like:
 *   import hero from "@/assets/hero.jpg?as=picture&format=avif;webp;jpg&w=640;1024;1600;1920";
 */
export function Picture({
  source,
  alt,
  sizes = "100vw",
  priority = false,
  className,
  ...rest
}: Props) {
  const { sources, img } = source;
  const order = ["avif", "webp", "jpg", "jpeg", "png"] as const;
  return (
    <picture>
      {order
        .filter((fmt) => sources[fmt])
        .map((fmt) => (
          <source
            key={fmt}
            type={`image/${fmt === "jpg" ? "jpeg" : fmt}`}
            srcSet={sources[fmt]}
            sizes={sizes}
          />
        ))}
      <img
        src={img.src}
        alt={alt}
        width={img.w}
        height={img.h}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={className}
        {...rest}
      />
    </picture>
  );
}