import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css'; // Import the CSS file

// Nav bar component
const Nav = () => {
  return (
    <div className='nav-wrapper'>
      <h1>SEBO Auto Detailing</h1>
      <ul className='nav'>
        <NavLink href='#about' link='About' />
        <NavLink href='#people' link='People' />
        <NavLink href='#contact' link='Contact' />
      </ul>
    </div>
  );
};

// Individual nav links component
const NavLink = ({ link, href }) => {
  return (
    <li className='nav-links'>
      <a href={href}>{link}</a>
    </li>
  );
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-header'>
        <h1>We Are Dogs</h1>
        <button>Check us out</button>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className='about-section' id='about'>
      <div className='about-section-wrapper'>
        <div className='about-text'>
          <div className='about-text-wrapper'>
            <h2>Who We Are</h2>
            <p>We are an essential partnership link between you and everyone else in existence.</p>
          </div>
        </div>
        <div className='about-img-section'>
          <div className='about-img'></div>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ galleryItems }) => {
  return (
    <div className='image-gallery-section' id='people'>
      <h2>Our People</h2>
      <div className='gallery'>
        {galleryItems.map((galleryItem) => (
          <div className='gallery-item' key={galleryItem.id}>
            <img src={galleryItem.img} alt={galleryItem.name} />
            <div className='gallery-item-text'>
              <h1>{galleryItem.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
      <div className='contact-lists'>
        <div className='contact-lists-ul'>
          <h4>Services</h4>
          <ul>
            <li>Eating</li>
            <li>Playing</li>
            <li>Humping</li>
          </ul>
        </div>
        <div className='contact-lists-ul'>
          <h4>About</h4>
          <ul>
            <li>Company</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='contact-lists-ul'>
          <h4>Pricing</h4>
          <ul>
            <li>Short</li>
            <li>Mid</li>
            <li>Long</li>
          </ul>
        </div>
      </div>

      <div className='contact-socials'>
        <ul>
          <li><i className='fa-brands fa-twitter'></i></li>
          <li><i className='fab fa-instagram'></i></li>
          <li><i className='fa-brands fa-linkedin-in'></i></li>
          <li><i className='fa-brands fa-tiktok'></i></li>
          <li><i className='fa-regular fa-envelope'></i></li>
        </ul>
      </div>

      <div className='contact-copyright'>
        <p>Copyright &#169; 2022</p>
      </div>
    </div>
  );
};

// Main component
const App = () => {
  const [galleryItems, setGalleryItems] = useState([
    {
      img: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
      name: 'Milo',
      id: 1
    },
    {
      img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      name: 'Charles',
      id: 2
    },
    {
      img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Jenn',
      id: 3
    },
    {
      img: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80',
      name: 'Pancake',
      id: 4
    },
    {
      img: 'https://images.unsplash.com/photo-1612940960267-4549a58fb257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      name: 'Eileen',
      id: 5
    },
    {
      img: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80',
      name: 'Z',
      id: 6
    },
  ]);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Gallery galleryItems={galleryItems} />
      <Contact />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;