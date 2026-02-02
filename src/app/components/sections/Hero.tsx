export default function Hero() {
  return (
    <section aria-hidden="true" className="w-full">
      <div
        className="
          h-80 md:h-105 lg:h-130
          w-full
          bg-(--surface-muted)
          bg-cover bg-center bg-no-repeat
        "
        style={{
          backgroundImage: "url('hero-background.webp')",
        }}
      />
    </section>
  );
}
