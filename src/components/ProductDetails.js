import React, {  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{ "--swiper-navigation-color": "#fff" }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="images/a.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/b.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/3.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/4.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/5.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/coat.jpeg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/mac.jpg" alt="product" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/a.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/b.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/3.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/4.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/5.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.jpg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/coat.jpeg" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/mac.jpg" alt="product" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductDetails;
