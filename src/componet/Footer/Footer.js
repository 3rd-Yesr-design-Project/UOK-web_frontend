import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <section class='ft-main'>
        <div class='ft-main-item'>
          <h2 class='ft-title'>About</h2>
          <ul>
            <li>
              <a href='#'>University</a>
            </li>
            <li>
              <a href='#'>Governance</a>
            </li>
            <li>
              <a href='#'>Administration</a>
            </li>
            <li>
              <a href='#'>Library</a>
            </li>
          </ul>
        </div>
        <div class='ft-main-item'>
          <h2 class='ft-title'>Research</h2>
          <ul>
            <li>
              <a href='#'>Research Uok</a>
            </li>
            <li>
              <a href='#'>Research Council</a>
            </li>
          </ul>
        </div>
        <div class='ft-main-item'>
          <h2 class='ft-title'>ICT Service</h2>
          <ul>
            <li>
              <a href='#'>ICT Center</a>
            </li>
            <li>
              <a href='#'>Kelani Net Login</a>
            </li>
            <li>
              <a href='#'>Kelani WIFI</a>
            </li>
          </ul>
        </div>
        <div class='ft-main-item'>
          <h2 class='ft-title'>Stay Updated</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <form>
            <input
              type='email'
              name='email'
              placeholder='Enter email address'
            />
            <input type='submit' value='Subscribe' />
          </form>
        </div>
      </section>

      <section class='ft-social'>
        <ul class='ft-social-list'>
          <li>
            <a href='#'>
              <i class='fab fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fab fa-instagram'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fab fa-youtube'></i>
            </a>
          </li>
        </ul>
      </section>

      <section class='ft-legal'>
        <ul class='ft-legal-list'>
          <li>
            <a href='#'>Terms &amp; Conditions</a>
          </li>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
          <li>&copy; 2021 Copyright.</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
