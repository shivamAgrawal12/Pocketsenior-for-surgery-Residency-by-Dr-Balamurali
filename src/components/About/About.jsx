import React from 'react';
import { aboutPic } from '../../data/cloudinary';
import { aboutBanner } from '../../data/cloudinary';
import "./About.css";

const About = () => {
  return (
    <>
      <div className="section" id="about-section">
        <h1 id='about-heading'>Foundations of <span id='about-heading-span'>Surgical</span> Residency</h1>
        <div id='about-contain'>
          <div className="profile-header">   
            <div className="cover-photo">
              <img src={aboutBanner} alt='background'/>
            </div>    
            <div className="profile-info">
              <div className="profile-pic">
                <img src={aboutPic} alt='about'/>
              </div>
              <h1 className="profile-name">Dr. Balamurali Balakrishnan</h1>
            </div>            
          </div>
          <p id='about-introduction'>The path to become a Surgeon is very tedious. 
            The journey started from the completion of 10th grade where one has to choose the 
            track that will lead him/her to be a professional later. Once the 12th grade is completed 
            one has to take up the entrance examination (NEET) to gain acceptance into a medical school. 
            After the medical school tenure of 5.5 years which often cumulatively becomes 6 years, he/she has 
            to take up an entrance examination to gain acceptance into a post graduate degree. In this highly 
            competitive world and high demanding society various super specialties have emerged making the 
            training programs lengthier.<br/>After 3 years of postgraduation, again an entrance examination has 
            to be taken up to choose super specialty which again termed for another 3 years. This partly sums up 
            the journey of an aspiring surgeon to a period of 10-12 years. Being a Surgical trainee myself, 
            I had encountered various struggles throughout the last three years. Mostly I had to depend on 
            my seniors to tackle them which helped me in enduring the journey. The idea of making a book with 
            ideas to make surgical residency easier came from my juniors who works in different part of countries 
            and calls me when encountering struggles in their residency.<br/>And this was due to lack of communication, 
            nonavailability of seniors in most places. This book will aim in providing the case details of various 
            surgical cases I encountered and presented for the academic purposes. The field of surgery is an 
            ever-evolving one, and there is a need for a guidance that is acceptable and dynamic to keep pace with 
            the rapidly changing knowledge base and technology. As a third-year surgical trainee, I hope through this 
            book i will give the necessary guide to tackle the struggles by giving a compilation of the cases 
            I presented during my academic sessions of residency.
          </p>
        </div>
      </div>
    </>
  )
}

export default About