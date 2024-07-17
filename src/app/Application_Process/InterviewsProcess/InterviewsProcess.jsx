"use client";
import "./InterviewsProcess.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import ResponsivePaginationComponent from "react-responsive-pagination";
import { useRef, useState } from "react";

function InterviewsProcess() {
  const sliderRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const ChangeSwiper = (e) => {
    setCurrentPage(e.activeIndex + 1);
  };
  const PaginationSlide = (e) => {
    setCurrentPage(e);
    sliderRef.current.swiper.slideTo(e - 1);
  };

  return (
    <div className="InterviewsProcess">
      <div className="container" data-aos="fade-down">
        <Image src="/logo.svg" width={150} height={40} alt="logo" />
        <h1>Interviews process</h1>
      </div>
      <div className="SwiperSection" data-aos="fade-down">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={true}
          modules={[Pagination]}
          initialSlide={currentPage}
          onSlideChange={(e) => ChangeSwiper(e)}
          ref={sliderRef}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },

            992: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className="SlideBox">
              <Image
                src="/Application/InterviewsProcess1.jpeg"
                width={300}
                height={300}
                alt="InterviewsProcess1"
              />
              <h1>01</h1>
              <h2>Job application</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Euismod ac at pretium
                cras massa adipiscing id dictum sed. Egestas eu mauris risus
                sagittis at orci odio.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideBox">
              <Image
                src="/Application/InterviewsProcess2.jpeg"
                width={300}
                height={300}
                alt="Quote"
              />
              <h1>02</h1>
              <h2>Phone interview</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Euismod ac at pretium
                cras massa adipiscing id dictum sed. Egestas eu mauris risus
                sagittis at orci odio.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideBox">
              <Image
                src="/Application/InterviewsProcess3.jpeg"
                width={300}
                height={300}
                alt="Quote"
              />
              <h1>03</h1>
              <h2>Panel interview</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Euismod ac at pretium
                cras massa adipiscing id dictum sed. Egestas eu mauris risus
                sagittis at orci odio.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideBox">
              <Image
                src="/Application/InterviewsProcess4.jpeg"
                width={300}
                height={300}
                alt="Quote"
              />
              <h1>04</h1>
              <h2>Case study interview</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Euismod ac at pretium
                cras massa adipiscing id dictum sed. Egestas eu mauris risus
                sagittis at orci odio.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideBox">
              <Image
                src="/Application/InterviewsProcess5.jpeg"
                width={300}
                height={300}
                alt="Quote"
              />
              <h1>05</h1>
              <h2>Final round of interviews</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Euismod ac at pretium
                cras massa adipiscing id dictum sed. Egestas eu mauris risus
                sagittis at orci odio.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideBox">
              <Image
                src="/Application/InterviewsProcess6.jpeg"
                width={300}
                height={300}
                alt="Quote"
              />
              <h1>06</h1>
              <h2>Job offer</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Euismod ac at pretium
                cras massa adipiscing id dictum sed. Egestas eu mauris risus
                sagittis at orci odio.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideBox">
              <Image
                src="/Application/InterviewsProcess7.jpeg"
                width={300}
                height={300}
                alt="Quote"
              />
              <h1>07</h1>
              <h2>Medical test</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Euismod ac at pretium
                cras massa adipiscing id dictum sed. Egestas eu mauris risus
                sagittis at orci odio.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SlideBox">
              <Image
                src="/Application/InterviewsProcess8.jpeg"
                width={300}
                height={300}
                alt="Quote"
              />
              <h1>08</h1>
              <h2>Start date{">"}On boarding</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Euismod ac at pretium
                cras massa adipiscing id dictum sed. Egestas eu mauris risus
                sagittis at orci odio.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container" data-aos="zoom-in">
        <div className="PaginationPanal">
          <ResponsivePaginationComponent
            current={currentPage}
            total={totalPages}
            onPageChange={PaginationSlide}
            previousLabel={<i className="fa-solid fa-arrow-left"></i>}
            nextLabel={<i className="fa-solid fa-arrow-right"></i>}
            maxWidth={100}
          />
        </div>
      </div>
    </div>
  );
}
export default InterviewsProcess;
