import React from 'react';
import "./About.css";
import Footer from '../../components/Footer/Footer';
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <>
    <section className='about'>
      <div className='container'>
        {/* <div className='section-title'>
          <h2>About</h2>
        </div> */}

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About ReadCrate</h2>
            <p className='fs-17'>ReadCrate is a book search app using Open Library API and draftbit REST API. It can be use to search book info from database of over 1.7 Million Books.</p>
            <p className='fs-17'>We can get you information like author, edition, genre, publish year, rating, subject time and places as well as detailed description of various books. It's a react-based single page application.</p>
          </div>
        </div>
      </div>
    </section>
    < Footer />
    </>
  )
}

export default About