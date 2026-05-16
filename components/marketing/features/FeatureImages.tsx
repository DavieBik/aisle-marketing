import Image from "next/image";

type FeatureImagesProps = {
  hero: { src: string; alt: string } | null;
  extras: { src: string; alt: string }[];
};

export function FeatureImages({ hero, extras }: FeatureImagesProps) {
  if (!hero && extras.length === 0) return null;

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      {hero ? (
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm sm:col-span-2">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
        </div>
      ) : null}
      {extras.map((img) => (
        <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 30vw"
          />
        </div>
      ))}
    </div>
  );
}