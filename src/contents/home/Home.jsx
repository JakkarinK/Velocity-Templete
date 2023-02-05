import React from "react";
import Footer from "../../components/footer/Footer";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>This is velocity</h1>
          <p>A free responsive templete by webflow</p>
          <div className="btn">
            <button>Sign Up</button>
            <button>Learn more</button>
          </div>
        </div>
      </section>

      <section className="wedo">
        <div className="container">
          <div className="title">
            <h2>What we do</h2>
            <p>This is some text inside of a div block</p>
          </div>

          <div className="wedo-content">
            <div className="wedo-content-item">
              <img src="https://via.placeholder.com/120" alt="pic" />
              <h3>Praphic Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati consectetur facere iure dicta, quae nam similique
                praesentium dolorum rem odio neque doloremque nihil assumenda,
                quibusdam, sed consequuntur libero hic dignissimos!
              </p>
            </div>
            <div className="wedo-content-item">
              <img src="https://via.placeholder.com/120" alt="pic" />
              <h3>Praphic Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati consectetur facere iure dicta, quae nam similique
                praesentium dolorum rem odio neque doloremque nihil assumenda,
                quibusdam, sed consequuntur libero hic dignissimos!
              </p>
            </div>
            <div className="wedo-content-item">
              <img src="https://via.placeholder.com/120" alt="pic" />
              <h3>Praphic Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati consectetur facere iure dicta, quae nam similique
                praesentium dolorum rem odio neque doloremque nihil assumenda,
                quibusdam, sed consequuntur libero hic dignissimos!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="title">
            <h2>Services</h2>
            <p>This is some text in side of div block</p>
          </div>
          <div className="services-content">
            <div className="services-content-item">
              <img src="https://via.placeholder.com/400x250" alt="" />
              <h3>Services One</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem animi illo, totam, quibusdam porro eos veniam rem
                voluptatibus blanditiis aperiam rerum cupiditate necessitatibus
                doloremque error repudiandae consequuntur dolor sed officiis?
              </p>
              <button>Learn More</button>
            </div>
            <div className="services-content-item">
              <img src="https://via.placeholder.com/400x250" alt="" />
              <h3>Services Two</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem animi illo, totam, quibusdam porro eos veniam rem
                voluptatibus blanditiis aperiam rerum cupiditate necessitatibus
                doloremque error repudiandae consequuntur dolor sed officiis?
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="preview">
        <div className="container">
          <div className="title">
            <h2>Tab section</h2>
            <p>This is some text inside of a div block.</p>
          </div>
          <div className="tabPic">
            <button>Tab Button 1</button>
            <button>Tab Button 2</button>
            <button>Tab Button 3</button>

            <div className="tab-item">
              <img src="https://via.placeholder.com/800x550" alt="" />
              <h3>Heading 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore blanditiis asperiores iure aperiam natus? Deleniti
                tempore veritatis architecto corrupti sapiente excepturi debitis
                dignissimos impedit aliquid! Quia soluta error totam tempore?
              </p>
            </div>
            <div className="tab-item">
              <img src="https://via.placeholder.com/800x550" alt="" />
              <h3>Heading 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore blanditiis asperiores iure aperiam natus? Deleniti
                tempore veritatis architecto corrupti sapiente excepturi debitis
                dignissimos impedit aliquid! Quia soluta error totam tempore?
              </p>
            </div>
            <div className="tab-item">
              <img src="https://via.placeholder.com/800x550" alt="" />
              <h3>Heading 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore blanditiis asperiores iure aperiam natus? Deleniti
                tempore veritatis architecto corrupti sapiente excepturi debitis
                dignissimos impedit aliquid! Quia soluta error totam tempore?
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
