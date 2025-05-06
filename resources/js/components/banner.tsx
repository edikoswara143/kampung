// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import { BannerPost } from '@/types';
import 'swiper/css';
// import required modules
// const numbers: number[] = Array.from({ length: 4 }, (_, i) => i + 1);

function Banner({ posts = [] }: { posts: BannerPost[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={12}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className="relative !h-40 w-full overflow-hidden rounded-lg">
        <div className="absolute h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1539600937385-bd902dd379cc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="bg-cover object-cover brightness-50"
            alt="Banner"
          />
        </div>
        <div className="absolute flex h-full w-full p-4">
          <div className="flex flex-col items-start justify-center">
            <div className="flex w-full flex-col">
              <div className="text-lg leading-relaxed font-semibold text-slate-50">Selamat Datang</div>
              <p className="font-regular text-xs leading-relaxed text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique, aspernatur aliquid enim quia nisi laudantium incidunt non.
              </p>
              <button className="mt-2 w-3/12 rounded-lg bg-sky-700 p-2 text-xs leading-relaxed font-semibold text-sky-50">Explore</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {posts.map((post) => (
        <SwiperSlide key={post.id} className="relative !h-40 w-full overflow-hidden rounded-lg">
          <div className="absolute top-0 right-0 z-50 flex rounded-bl-lg bg-rose-500 p-2">
            <span className="text-xs leading-relaxed font-semibold text-slate-50">{post.category}</span>
          </div>
          <div className="absolute h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1539600937385-bd902dd379cc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="bg-cover object-cover brightness-50"
              alt="Banner"
            />
          </div>
          <div className="absolute flex h-full w-full p-4">
            <div className="flex flex-col items-start justify-center">
              <div className="flex w-full flex-col">
                <div className="text-lg leading-relaxed font-semibold text-slate-50">{post.title}</div>
                <p className="font-regular text-xs leading-relaxed text-slate-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique, aspernatur aliquid enim quia nisi laudantium incidunt
                  non.
                </p>
                <button className="mt-2 w-3/12 rounded-lg bg-sky-700 p-2 text-xs leading-relaxed font-semibold text-sky-50">Read...</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
