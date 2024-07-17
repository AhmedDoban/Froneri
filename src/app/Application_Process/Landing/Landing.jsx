import Image from "next/image";
import "./Landing.css";

function Landing() {
  return (
    <div className="Application_ProcessLanding">
      <div className="container">
        <div className="left">
          <Image src="/logo.svg" width={130} height={45} alt="logo" />
          <h1>Requirement Process</h1>
          <p>
            We like to Think Big and Act Fast. Our recruitment stages are
            flexible and depend on the role you applied for. Here’s what you can
            expect.
          </p>
        </div>
        <div className="right">
          <Image
            src="/Application/LandingImage.jpeg"
            width={500}
            height={500}
            alt="landing"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
