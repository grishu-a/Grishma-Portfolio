import Image from "next/image";

const screens = [
  { src: "/hero/circle-2.webp", alt: "Fonepay Circle send money screen", className: "hero-phone hero-phone-left" },
  { src: "/hero/circle-4.webp", alt: "Fonepay Circle request payment screen", className: "hero-phone hero-phone-right" },
  { src: "/hero/circle-1.webp", alt: "Fonepay Circle home screen", className: "hero-phone hero-phone-front" },
];

export default function HeroVisual() {
  return (
    <figure className="hero-visual relative mx-auto h-[460px] w-full max-w-[400px]">
      {screens.map((screen) => (
        <div key={screen.src} className={screen.className}>
          <Image
            src={screen.src}
            alt={screen.alt}
            fill
            sizes="260px"
            priority
            className="object-cover object-top"
          />
        </div>
      ))}
      <figcaption className="absolute -bottom-2 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-background/90 px-3 py-1 font-mono text-[11px] text-muted shadow-sm backdrop-blur">
        Fonepay Circle · shipped
      </figcaption>
    </figure>
  );
}
