import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
      
      <HorizontalScrollCarousel />
      
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]  bg-white dark:bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div

      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 border-black dark:border-white border-2 rounded-md"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://ibb.co/HTj85YP",
    title: "Alien",
    id: 1,
  },
  {
    url: "noodles.jpg",
    title: "Aliens",
    id: 2,
  },
  {
    url: "geometry1.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "geometry2.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "geometry3.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];