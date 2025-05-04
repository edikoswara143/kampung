// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
const numbers: number[] = Array.from({ length: 5 }, (_, i) => i + 1);

function Banner() {
  return (
    <Swiper
      modules={[Autoplay]}
      rewind={true}
      spaceBetween={12}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {numbers.map((num: number) => (
        <SwiperSlide key={num} className="relative !h-40 w-full rounded-lg bg-sky-700">
          <div className="absolute mx-auto flex h-full w-full items-center justify-center">Skyyy + {num}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
