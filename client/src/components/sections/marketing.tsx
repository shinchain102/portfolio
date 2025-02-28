import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlitchText } from "@/components/ui/glitch-text";

const marketingImages = [
  {
    url: "https://images.unsplash.com/photo-1531265726475-52ad60219627",
    alt: "Digital marketing visualization"
  },
  {
    url: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
    alt: "Marketing strategy meeting"
  }
];

export function Marketing() {
  return (
    <section className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 neon-glow text-center">
          Marketing Insights
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-background/80 backdrop-blur">
            <CardContent className="p-6">
              <GlitchText
                text="Digital Strategy"
                className="text-2xl font-bold mb-4"
              />
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">SEO</Badge>
                <Badge variant="secondary">Content Marketing</Badge>
                <Badge variant="secondary">Social Media</Badge>
              </div>
              <p className="text-muted-foreground">
                Crafting data-driven digital strategies that connect brands with
                their audience in meaningful ways.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/80 backdrop-blur">
            <CardContent className="p-6">
              <GlitchText
                text="Innovation"
                className="text-2xl font-bold mb-4"
              />
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">AI Marketing</Badge>
                <Badge variant="secondary">Automation</Badge>
                <Badge variant="secondary">Analytics</Badge>
              </div>
              <p className="text-muted-foreground">
                Leveraging cutting-edge technology to stay ahead in the
                ever-evolving digital landscape.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
