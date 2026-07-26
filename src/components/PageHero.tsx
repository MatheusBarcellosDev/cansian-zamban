import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative min-h-[52vh] overflow-hidden md:min-h-[58vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-gradient absolute inset-0" />
      <div className="shell relative flex min-h-[52vh] flex-col justify-end px-5 pb-14 pt-28 md:min-h-[58vh] md:px-8 md:pb-16">
        <h1 className="type-page animate-float-in max-w-3xl">{title}</h1>
        <p className="type-lede animate-float-in-delay-1 mt-4">{subtitle}</p>
      </div>
    </section>
  );
}
