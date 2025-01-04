import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { data } from '@/constants';

export default function MyCarousel() {
    const cards = data.map((card) => (
        <Card key={card.src} card={card} />
    ));
    return (
        <div className="w-full h-full px-4 pb-24 mx-auto">
            <Carousel items={cards} />
        </div>
    );
}

