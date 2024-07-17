import Image from "next/image";
import "./OurValues.css";

function OurValues() {
  return (
    <div className="OurValues">
      <div className="container">
        <div className="head-info">
          <h3>Our Values</h3>
          <p>For more information on our values, see below.</p>
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
            <div className="info">
              <h3>Consumer Focussed</h3>
              <h2>Passion for Consumers and Customers</h2>
              <p>Our consumers and customers are the heart of our business.</p>
              <ul>
                <li>
                  We deliver consumer and customer satisfaction through a full
                  appreciation of their needs.
                </li>
                <li>We make decisions with the consumer in mind.</li>
                <li>
                  We provide consumers with the best experience through all our
                  ice cream offers
                </li>
              </ul>
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
            <div className="info">
              <h3>Teamwork</h3>
              <h2>Passion for People</h2>
              <p>
                We believe that we can only deliver superior business results
                with the right people.
              </p>
              <ul>
                <li>We respect and embrace diversity.</li>
                <li>We actively listen to different opinions.</li>
                <li>
                  We promote team spirit and make decisions based on what is
                  best for the business.
                </li>
              </ul>
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
            <div className="info">
              <h3>Accountability</h3>
              <h2>Passion for Ownership</h2>
              <p>
                We do what we say we will do taking responsibility for our
                actions.
              </p>
              <ul>
                <li>We deliver on our commitments.</li>
                <li>We address issues directly and openly.</li>
                <li>
                  We use initiative and judgement to make fast decisions that
                  add value.
                </li>
              </ul>
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
            <div className="info">
              <h3>Performance</h3>
              <h2>Passion for Results</h2>
              <p>We are passionate about growing value in our business.</p>
              <ul>
                <li>We recognise high performance.</li>
                <li>We challenge each other to deliver better results.</li>
                <li>We keep it simple.</li>
              </ul>
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
            <div className="info">
              <h3>Entrepreneurial</h3>
              <h2>Passion for Improvement</h2>
              <p>
                We find new ways to improve our business and always learn from
                our mistakes.
              </p>
              <ul>
                <li>We actively challenge the status quo.</li>
                <li>We lead and inspire our people to achieve excellence.</li>
                <li>
                  We treat the business as if it were our own, focussing on what
                  is important.
                </li>
              </ul>
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
            <div className="info">
              <h3>Quality</h3>
              <h2>Passion for Excellence</h2>
              <p>We strive to be the best at everything we do.</p>
              <ul>
                <li>We adopt a right first-time approach.</li>
                <li>We fight complacency everywhere.</li>
                <li>We constantly pursue perfection.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurValues;
