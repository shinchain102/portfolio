import { ImageCarousel } from "@/components/ui/image-carousel";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  {
    url: "https://images.unsplash.com/photo-1551771685-c367c9127a03",
    alt: "Cyberpunk city night view"
  },
  {
    url: "https://images.unsplash.com/photo-1605747395134-69b87fc03c5c",
    alt: "Neon city lights"
  },
  {
    url: "https://images.unsplash.com/photo-1581373449483-37449f962b6c",
    alt: "Urban cyberpunk architecture"
  }
];

export function Photography() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 neon-glow text-center">
          Photography
        </h2>
        
        <Card className="bg-background/50 backdrop-blur">
          <CardContent className="p-6">
            <ImageCarousel
              images={images}
              className="w-full aspect-video mb-8"
            />
            <p className="text-muted-foreground text-center">
              Capturing the essence of cyberpunk aesthetics through my lens
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
