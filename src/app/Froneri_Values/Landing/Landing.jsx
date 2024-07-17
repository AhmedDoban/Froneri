import Image from "next/image";
import "./Landing.css";

function Landing() {
  return (
    <div className="ValuesLanding">
      <div className="container">
        <div className="head" data-aos="fade-down">
          <Image
            src="/Values/Landing.jpeg"
            width={1000}
            height={1000}
            alt="Landing"
          />
        </div>
        <div className="landing-Content-container">
          <div className="box" data-aos="zoom-in">
            <div className="Info-Head">
              <Image src="/logo.svg" width={150} height={40} alt="logo" />
              <h3>Values</h3>
            </div>
            <h2>
              It's not only the results that define a business, but also the
              people.
            </h2>
            <p>
              We believe in the power of a strong culture that has people at the
              heart of everything we do. Our guiding principles are simple and
              followed by everyone in the business. We pride ourselves on a
              genuinely friendly and informal style where everyone’s invited.
            </p>
          </div>
          <div className="box" data-aos="zoom-in">
            <h3>
              A FRONERI person is unique. They are an ‘all-rounder’,
              self-motivated, enthusiastic and think outside the box. They are
              happy to roll up their sleeves and actively get involved. They are
              accountable for their actions and problem solvers – always open,
              honest and collaborative. They have a passion for excellence and
              an eye for detail. Quality is extremely important to us. They have
              an entrepreneurial spirit and a ‘can do’ attitude. We strongly
              believe that a great idea can come from anywhere in the business.
              A FRONERI person believes that we come to work to create the best
              quality ice creams that excite our consumers and push the
              boundaries of what’s possible.
            </h3>
          </div>
          <div className="box" data-aos="zoom-in">
            <h1>Our Purpose</h1>
            <p>
              To become the world’s best ice cream company for all consumers,
              customers, and employees.
            </p>
          </div>
          <div className="box" data-aos="zoom-in">
            <h1>Our Goal</h1>
            <p>
              To grow our business through celebrated brands and own label
              products, bringing excitement to our consumers and customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
