import React from "react";
import Footer from "../../components/footer/Footer";
import "./contacts.scss";

function Contacts() {
  return (
    <div className="contacts">
      <div className="container">
        <div className="send-message">
          <div className="title">
            <h2>Contact Us Today</h2>
            <p>This is some text inside of a div block.</p>
          </div>
          <div className="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <p>
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
              tristique posuere.
            </p>
          </div>

          <form>
            <input type="text" placeholder="Enter your name..." />
            <input type="email" placeholder="Enter your email..." />
            <textarea placeholder="Message" rows={5} />
            <button type="submit">Send Carrier Pigeon</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
