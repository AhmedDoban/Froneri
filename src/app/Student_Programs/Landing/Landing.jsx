"use client";
import Image from "next/image";
import "./Landing.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function Landing() {
  return (
    <div className="StudentLanding">
      <div className="container">
        <div className="Headprogram">
          <div className="left">
            <div className="image-Large">
              <Image
                src="/Students/LandingLarge.jpeg"
                width={500}
                height={500}
                alt="Landing Large"
              />
            </div>
            <div className="image-Small">
              <Image
                src="/Students/LandingSmall.jpeg"
                width={200}
                height={200}
                alt="Landing Small"
              />
            </div>
          </div>
          <div className="right">
            <h1>FRONERI Summer internship program</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Phasellus feugiat
              malesuada scelerisque id pellentesque lobortis at adipiscing
              etiam. Purus vestibulum fringilla diam felis. Mauris mauris tempus
              sem ultrices justo. In posuere gravida lorem arcu et.
            </p>
            <button className="Apply">
              <span> Apply Now</span>
              <Image
                src="/icons/Arrow-right.svg"
                width={25}
                height={25}
                alt="arrow-right"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="container ContainerOverFlow">
        <div className="Programtestimonials">
          <Image src="/Students/Quote.svg" width={50} height={50} alt="Quote" />
          <h3>Program testimonials</h3>
        </div>
        <div className="swiperContainer">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
            centeredSlides={true}
            loop={true}
            breakpoints={{
              350: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="SlideBox">
                <Image
                  src="/Students/Quote.svg"
                  width={50}
                  height={50}
                  alt="Quote"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus cursus lorem
                  proin morbi enim ultrices vehicula adipiscing nibh.
                  Suspendisse vitae sit morbi diam orci tincidunt tincidunt
                  cursus felis. A dui cras enim augue interdum. Nec amet leo id
                  enim id pellentesque eget.
                </p>
                <div className="userBox">
                  <div className="left">
                    <Image
                      src="/Students/Freda.jpeg"
                      width={100}
                      height={100}
                      alt="Freda"
                    />
                    <div className="info">
                      <h3>Freda Okuneva</h3>
                      <p>Freda79@yahoo.com</p>
                    </div>
                  </div>
                  <div className="rate">
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlideBox">
                <Image
                  src="/Students/Quote.svg"
                  width={50}
                  height={50}
                  alt="Quote"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus cursus lorem
                  proin morbi enim ultrices vehicula adipiscing nibh.
                  Suspendisse vitae sit morbi diam orci tincidunt tincidunt
                  cursus felis. A dui cras enim augue interdum. Nec amet leo id
                  enim id pellentesque eget.
                </p>
                <div className="userBox">
                  <div className="left">
                    <Image
                      src="/Students/Freda.jpeg"
                      width={100}
                      height={100}
                      alt="Freda"
                    />
                    <div className="info">
                      <h3>Freda Okuneva</h3>
                      <p>Freda79@yahoo.com</p>
                    </div>
                  </div>
                  <div className="rate">
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlideBox">
                <Image
                  src="/Students/Quote.svg"
                  width={50}
                  height={50}
                  alt="Quote"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus cursus lorem
                  proin morbi enim ultrices vehicula adipiscing nibh.
                  Suspendisse vitae sit morbi diam orci tincidunt tincidunt
                  cursus felis. A dui cras enim augue interdum. Nec amet leo id
                  enim id pellentesque eget.
                </p>
                <div className="userBox">
                  <div className="left">
                    <Image
                      src="/Students/Freda.jpeg"
                      width={100}
                      height={100}
                      alt="Freda"
                    />
                    <div className="info">
                      <h3>Freda Okuneva</h3>
                      <p>Freda79@yahoo.com</p>
                    </div>
                  </div>
                  <div className="rate">
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlideBox">
                <Image
                  src="/Students/Quote.svg"
                  width={50}
                  height={50}
                  alt="Quote"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus cursus lorem
                  proin morbi enim ultrices vehicula adipiscing nibh.
                  Suspendisse vitae sit morbi diam orci tincidunt tincidunt
                  cursus felis. A dui cras enim augue interdum. Nec amet leo id
                  enim id pellentesque eget.
                </p>
                <div className="userBox">
                  <div className="left">
                    <Image
                      src="/Students/Freda.jpeg"
                      width={100}
                      height={100}
                      alt="Freda"
                    />
                    <div className="info">
                      <h3>Freda Okuneva</h3>
                      <p>Freda79@yahoo.com</p>
                    </div>
                  </div>
                  <div className="rate">
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlideBox">
                <Image
                  src="/Students/Quote.svg"
                  width={50}
                  height={50}
                  alt="Quote"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus cursus lorem
                  proin morbi enim ultrices vehicula adipiscing nibh.
                  Suspendisse vitae sit morbi diam orci tincidunt tincidunt
                  cursus felis. A dui cras enim augue interdum. Nec amet leo id
                  enim id pellentesque eget.
                </p>
                <div className="userBox">
                  <div className="left">
                    <Image
                      src="/Students/Freda.jpeg"
                      width={100}
                      height={100}
                      alt="Freda"
                    />
                    <div className="info">
                      <h3>Freda Okuneva</h3>
                      <p>Freda79@yahoo.com</p>
                    </div>
                  </div>
                  <div className="rate">
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlideBox">
                <Image
                  src="/Students/Quote.svg"
                  width={50}
                  height={50}
                  alt="Quote"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus cursus lorem
                  proin morbi enim ultrices vehicula adipiscing nibh.
                  Suspendisse vitae sit morbi diam orci tincidunt tincidunt
                  cursus felis. A dui cras enim augue interdum. Nec amet leo id
                  enim id pellentesque eget.
                </p>
                <div className="userBox">
                  <div className="left">
                    <Image
                      src="/Students/Freda.jpeg"
                      width={100}
                      height={100}
                      alt="Freda"
                    />
                    <div className="info">
                      <h3>Freda Okuneva</h3>
                      <p>Freda79@yahoo.com</p>
                    </div>
                  </div>
                  <div className="rate">
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlideBox">
                <Image
                  src="/Students/Quote.svg"
                  width={50}
                  height={50}
                  alt="Quote"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus cursus lorem
                  proin morbi enim ultrices vehicula adipiscing nibh.
                  Suspendisse vitae sit morbi diam orci tincidunt tincidunt
                  cursus felis. A dui cras enim augue interdum. Nec amet leo id
                  enim id pellentesque eget.
                </p>
                <div className="userBox">
                  <div className="left">
                    <Image
                      src="/Students/Freda.jpeg"
                      width={100}
                      height={100}
                      alt="Freda"
                    />
                    <div className="info">
                      <h3>Freda Okuneva</h3>
                      <p>Freda79@yahoo.com</p>
                    </div>
                  </div>
                  <div className="rate">
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlideBox">
                <Image
                  src="/Students/Quote.svg"
                  width={50}
                  height={50}
                  alt="Quote"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus cursus lorem
                  proin morbi enim ultrices vehicula adipiscing nibh.
                  Suspendisse vitae sit morbi diam orci tincidunt tincidunt
                  cursus felis. A dui cras enim augue interdum. Nec amet leo id
                  enim id pellentesque eget.
                </p>
                <div className="userBox">
                  <div className="left">
                    <Image
                      src="/Students/Freda.jpeg"
                      width={100}
                      height={100}
                      alt="Freda"
                    />
                    <div className="info">
                      <h3>Freda Okuneva</h3>
                      <p>Freda79@yahoo.com</p>
                    </div>
                  </div>
                  <div className="rate">
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SlideBox">
                <Image
                  src="/Students/Quote.svg"
                  width={50}
                  height={50}
                  alt="Quote"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rhoncus cursus lorem
                  proin morbi enim ultrices vehicula adipiscing nibh.
                  Suspendisse vitae sit morbi diam orci tincidunt tincidunt
                  cursus felis. A dui cras enim augue interdum. Nec amet leo id
                  enim id pellentesque eget.
                </p>
                <div className="userBox">
                  <div className="left">
                    <Image
                      src="/Students/Freda.jpeg"
                      width={100}
                      height={100}
                      alt="Freda"
                    />
                    <div className="info">
                      <h3>Freda Okuneva</h3>
                      <p>Freda79@yahoo.com</p>
                    </div>
                  </div>
                  <div className="rate">
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                    <Image
                      src="/Students/Star.svg"
                      width={18}
                      height={18}
                      alt="Star"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Landing;
