import Image from "next/image";
import "./OurPrograms.css";

function OurPrograms() {
  return (
    <div className="OurPrograms">
      <div className="OurPrograms_Cicle">
        <div className="container">
          <div className="info" data-aos="fade-down">
            <Image src="/logo.svg" width={100} height={30} alt="Froneri" />
            <h2>Our programs</h2>
            <p>
              You&apos;ll have the chance to work on cutting-edge projects that
              shape the future of technology, while continuously honing your
              skills and expertise
            </p>
          </div>
          <div className="Programs_Container">
            <div className="box" data-aos="zoom-in">
              <Image
                src="/StudentPrograms.jpeg"
                width={500}
                height={300}
                alt="Student Programs"
              />
              <h3>Student Programs</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vulputate feugiat dictum
                ut a sed dapibus non nullam. Cras massa aliquet vitae neque
                libero. Nibh gravida cursus dictumst tortor. Est diam sed netus
                laoreet suspendisse amet augue a. Vestibulum turpis tellus lorem
                adipiscing. Elementum et neque quam dignissim aliquet. Magna
                aliquet vitae ultricies et nisi ac suspendisse. Pulvinar
                porttitor neque amet nunc fames gravida in facilisis. Curabitur
                neque libero aliquet
              </p>
              <button>
                <span>Learn more</span>
                <Image
                  src="/icons/Arrow-right.svg"
                  width={25}
                  height={25}
                  alt="arrow-right"
                />
              </button>
            </div>
            <div className="box" data-aos="zoom-in">
              <Image
                src="/FreshGraduatesPrograms.jpeg"
                width={500}
                height={200}
                alt="Student Programs"
              />
              <h3>Fresh Graduates Programs</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Porttitor non mi risus
                aenean nunc cursus est. Viverra nisl venenatis purus lectus.
                Feugiat malesuada a molestie morbi turpis arcu mauris tincidunt.
                Gravida lobortis eu at tempus bibendum tristique nisi.
                Pellentesque nunc vitae condimentum lectus vel adipiscing.
              </p>
              <button>
                <span>Learn more</span>
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
      </div>
    </div>
  );
}
export default OurPrograms;
