import React, {
  useRef,
  useState,
  useEffect,
  MutableRefObject,
  HTMLAttributes,
} from "react";
import { motion } from "framer-motion";

interface ICarouselProps extends HTMLAttributes<HTMLDivElement> {
  images: string[];
}

export function Carousel({ images }: ICarouselProps) {
  const carousel = useRef<any>(null);
  const [width, setWidth] = useState(0);


  useEffect(() => {
    const screenWidth = window.screen.width
    console.log(screenWidth)
    if(screenWidth >= 600){
      setWidth(carousel.current?.scrollWidth - (carousel.current?.offsetWidth * 1.2));

    } else {
      setWidth(carousel.current?.scrollWidth - (carousel.current?.offsetWidth * 1.45));
    }
  }, []);

  return (
    <div className="w-screen">
      <motion.div
      ref={carousel}
      className="w-fullmax-w-[380px] md:max-w-[800px] m-auto px-4 overflow-hidden cursor-grab overflow-x-hidden"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex gap-4 snap-x"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        initial={{ x: 200, opacity: 0.1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {images.map((image) => (
          <motion.div
            key={image}
            className="min-w-[300px] min-h-[150px] md:min-w-[700px] md:min-h-[400px] snap-center"
          >
            <img
              src={image}
              alt="Alt Text"
              className="w-full h-full rounded-lg pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    </div>
  );
}
