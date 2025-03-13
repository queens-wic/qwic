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
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Image
            src="/events/hackher.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/team-photos-2024/AllixFletcher.jpg
"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
