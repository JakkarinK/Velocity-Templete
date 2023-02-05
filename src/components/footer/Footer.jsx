import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-grid-item">
            <h5>about velocity</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="footer-grid-item">
            <h5>useful links</h5>
            <ul>
              <li>
                <a href=".">Phasellus gravida semper nisi</a>
              </li>
              <li>
                <a href=".">Suspendisse nisl elit</a>
              </li>
              <li>
                <a href=".">Dellentesque habitant morbi</a>
              </li>
              <li>
                <a href=".">Etiam sollicitudin ipsum</a>
              </li>
            </ul>
          </div>
          <div className="footer-grid-item">
            <h5>social</h5>
            <div className="socials">
              <div className="social-item">
                <i class="fa-brands fa-twitter"></i>
                <a href=".">Twitter</a>
              </div>
              <div className="social-item">
                <i class="fa-brands fa-square-facebook"></i>
                <a href=".">Facebook</a>
              </div>
              <div className="social-item">
                <i class="fa-brands fa-pinterest-p"></i>
                <a href=".">Pinterest</a>
              </div>
              <div className="social-item">
                <i class="fa-brands fa-google-plus-g"></i>
                <a href=".">Google</a>
              </div>
              <div className="social-item">
                <i class="fa-brands fa-discord"></i>
                <a href=".">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>Copyright Velocity Inc. Made in Webflow.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
