import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { useGalleryStore } from "./Store";
import { ShoeImages } from "./Products";
import Previous from "/src/images/icon-previous.svg";
import Next from "/src/images/icon-next.svg";
import CloseIcon from "/src/images/icon-close.svg";

const ModalGallery = () => {
  const { isModalOpen, currentIndex, closeModal } = useGalleryStore();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (isModalOpen && swiperRef.current) {
      swiperRef.current.slideTo(currentIndex);
    }
  }, [isModalOpen, currentIndex]);

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={CloseIcon}
          alt="Close"
          className="close-btn"
          onClick={closeModal}
        />

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
                className="ItemImage ModalImage"
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
              onClick={() => swiperRef.current?.slideTo(index)}
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
    </div>
  );
};

export default ModalGallery;
