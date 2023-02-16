import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import "./home.scss";

// Picture
import Pic1 from '../../img/p1.jpg'
import Pic2 from '../../img/p2.jpg'
import TabPic1 from '../../img/tab1.jpg'
import TabPic2 from '../../img/tab2.jpg'
import TabPic3 from '../../img/tab3.jpg'

function Home() {

  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);

  const onClickTab1 = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
  }
  const onClickTab2 = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
  }
  const onClickTab3 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
  }
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
              <img src={Pic1} alt="ServicePic-1" />
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
              <img src={Pic2} alt="ServicePic-2" />
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
            <button onClick={onClickTab1}>Tab Button 1</button>
            <button onClick={onClickTab2}>Tab Button 2</button>
            <button onClick={onClickTab3}>Tab Button 3</button>

            {tab1 ?<div className="tab-item">
              <img src={TabPic1} alt="TabPic1" />
              <h3>Heading 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore blanditiis asperiores iure aperiam natus? Deleniti
                tempore veritatis architecto corrupti sapiente excepturi debitis
                dignissimos impedit aliquid! Quia soluta error totam tempore?
              </p>
            </div>:null}
            {tab2 ?<div className="tab-item">
              <img src={TabPic2} alt="TabPic2" />
              <h3>Heading 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore blanditiis asperiores iure aperiam natus? Deleniti
                tempore veritatis architecto corrupti sapiente excepturi debitis
                dignissimos impedit aliquid! Quia soluta error totam tempore?
              </p>
            </div>:null}
            {tab3 ?<div className="tab-item">
              <img src={TabPic3} alt="TabPic3" />
              <h3>Heading 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore blanditiis asperiores iure aperiam natus? Deleniti
                tempore veritatis architecto corrupti sapiente excepturi debitis
                dignissimos impedit aliquid! Quia soluta error totam tempore?
              </p>
            </div>:null}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
