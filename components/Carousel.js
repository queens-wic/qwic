import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

export default function CarouselSlider() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="centered-image">
            <Image
              src="/community-slider/bracelet1.png"
              width={800}
              height={450}
              alt="Bracelet Making"
            />
          </CarouselItem>

          <CarouselItem className="centered-image">
            <Image
              src="/community-slider/bracelet2.png"
              width={800}
              height={450}
              alt="Bracelet Making"
            />
          </CarouselItem>

          <CarouselItem className="centered-image">
            <Image
              src="/community-slider/oweek1.png"
              width={800}
              height={450}
              alt="Orientation Week"
            />
          </CarouselItem>

          <CarouselItem className="centered-image">
            <Image
              src="/community-slider/oweek2.png"
              width={800}
              height={450}
              alt="Orientation Week"
            />
          </CarouselItem>

          <CarouselItem className="centered-image">
            <Image
              src="/community-slider/bracelet1.png"
              width={800}
              height={450}
              alt="Bracelet Making"
            />
          </CarouselItem>

          <CarouselItem className="centered-image">
            <Image
              src="/community-slider/bitbyte1.png"
              width={800}
              height={450}
              alt="BitByte Mentorship"
            />
          </CarouselItem>

          <CarouselItem className="centered-image">
            <Image
              src="/community-slider/bitbyte2.png"
              width={800}
              height={450}
              alt="BitByte Mentorship"
            />
          </CarouselItem>

          <CarouselItem className="centered-image">
            <Image
              src="/community-slider/spinco.png"
              width={800}
              height={450}
              alt="SpinCo"
            />
          </CarouselItem>

          <CarouselItem className="centered-image">
            <Image
              src="/community-slider/hackherGroup.png"
              width={800}
              height={450}
              alt="HackHer 2025"
            />
          </CarouselItem>



        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
  );
}
