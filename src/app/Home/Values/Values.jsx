import Image from "next/image";
import "./Values.css";

function Values() {
  return (
    <div className="Values">
      <div className="container">
        <div className="info" data-aos="fade-down">
          <div className="Info-Head">
            <Image src="/logo.svg" width={150} height={40} alt="logo" />
            <h3>Values</h3>
          </div>
          <p>
            It's not only the results that define a business, but also the
            people.
          </p>
        </div>
        <div className="Values-container">
          <div className="box" data-aos="zoom-in">
            <div className="value-img-box">
              <Image
                src="/Values/Value1.svg"
                width={50}
                height={50}
                alt="Values"
              />
            </div>
            <h3>Consumer Focussed</h3>
            <p>Our consumers and customers are the heart of our business.</p>
            <div className="MoreDetailsBox">
              <Image
                src="/Values/Arrow-down.svg"
                width={20}
                height={20}
                alt="Values"
              />
            </div>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="value-img-box">
              <Image
                src="/Values/Value2.svg"
                width={50}
                height={50}
                alt="Values"
              />
            </div>
            <h3>Teamwork</h3>
            <p>
              We believe that we can only deliver superior business results with
              the right people.
            </p>
            <div className="MoreDetailsBox">
              <Image
                src="/Values/Arrow-down.svg"
                width={20}
                height={20}
                alt="Values"
              />
            </div>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="value-img-box">
              <Image
                src="/Values/Value3.svg"
                width={50}
                height={50}
                alt="Values"
              />
            </div>
            <h3>Accountability</h3>
            <p>
              We do what we say we will do taking responsibility for our
              actions.
            </p>
            <div className="MoreDetailsBox">
              <Image
                src="/Values/Arrow-down.svg"
                width={20}
                height={20}
                alt="Values"
              />
            </div>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="value-img-box">
              <Image
                src="/Values/Value4.svg"
                width={50}
                height={50}
                alt="Values"
              />
            </div>
            <h3>Performance</h3>
            <p>We are passionate about growing value in our business.</p>
            <div className="MoreDetailsBox">
              <Image
                src="/Values/Arrow-down.svg"
                width={20}
                height={20}
                alt="Values"
              />
            </div>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="value-img-box">
              <Image
                src="/Values/Value5.svg"
                width={50}
                height={50}
                alt="Values"
              />
            </div>
            <h3>Entrepreneurial</h3>
            <p>
              We find new ways to improve our business and always learn from our
              mistakes.
            </p>
            <div className="MoreDetailsBox">
              <Image
                src="/Values/Arrow-down.svg"
                width={20}
                height={20}
                alt="Values"
              />
            </div>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="value-img-box">
              <Image
                src="/Values/Value6.svg"
                width={50}
                height={50}
                alt="Values"
              />
            </div>
            <h3>Quality</h3>
            <p>We strive to be the best at everything we do.</p>
            <div className="MoreDetailsBox">
              <Image
                src="/Values/Arrow-down.svg"
                width={20}
                height={20}
                alt="Values"
              />
            </div>
          </div>
        </div>
        <div className="ShowMore">
          <button>
            <span>Learn more</span>
            <Image
              src="/icons/Arrow-right.svg"
              width={15}
              height={15}
              alt="arrow-right"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Values;
