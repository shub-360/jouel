import { createFileRoute } from "@tanstack/react-router";
import { LenisProvider } from "@/components/jouel/LenisProvider";
import { Hero } from "@/components/jouel/Hero";
import { Philosophy } from "@/components/jouel/Philosophy";
import { Collection } from "@/components/jouel/Collection";
import { Story } from "@/components/jouel/Story/index";
import { Finale } from "@/components/jouel/Finale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JOUEL — A Cinematic Jewelry Atelier" },
      {
        name: "description",
        content:
          "Jouel is a quiet world of craftsmanship and feeling — fine jewelry as memory, devotion, and art. An immersive cinematic experience.",
      },
      { property: "og:title", content: "JOUEL — A Cinematic Jewelry Atelier" },
      {
        property: "og:description",
        content:
          "An editorial cinematic experience celebrating jewelry as emotion, memory, and craftsmanship.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LenisProvider>
      <main className="grain relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
        <Hero />
        <Philosophy />
        <Collection />
        <Story />
        <Finale />
      </main>
    </LenisProvider>
  );
}
