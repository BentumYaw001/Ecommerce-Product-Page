import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { ShoeImages } from "./Products";
import Previous from "/src/images/icon-previous.svg";
import Next from "/src/images/icon-next.svg";
import { useGalleryStore } from "./Store";
import ModalGallery from "./ModalGallery";

const ShoeGallery = () => {
  const swiperRef = useRef(null);
  const { openModal } = useGalleryStore();

  const handleThumbnailClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <div className="ShoeGallery">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="swiper-container"
        >
          {ShoeImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.image}
                alt={`Slide ${index + 1}`}
                className="ItemImage"
                onClick={() => openModal(index)} // Open modal on click
                style={{ cursor: "pointer" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="ThumbnailImages">
          {ShoeImages.map((item, index) => (
            <img
              key={index}
              src={item.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className="Thumbnail"
              onClick={() => handleThumbnailClick(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        <div className="NextItem">
          <img
            src={Previous}
            alt="Previous"
            className="prev-btn cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <img
            src={Next}
            alt="Next"
            className="next-btn cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>

      {/* Modal Component */}
      <ModalGallery />
    </>
  );
};

export default ShoeGallery;
