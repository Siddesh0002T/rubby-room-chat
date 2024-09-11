import React from 'react';
import Type from './Type';
import RubbyAboutType from './RubbyAboutType';
import MeType from './MeType';
import Subscribe from './Subscribe';
import './Css/About.css'; 

const About = () => {
  return (
    <div className="about-us">
      <h1>About Rubby Room Chat</h1>
      <p>
        Rubby Room Chat is a mobile-first chat application that allows users to easily create and join chat rooms. Users can set their username and join a chat room by entering the room name. If the room doesn't exist, a new one will be created. Invite your friends by sharing the link, and they can join by adding their username.
      </p>
      <div className='type-text'>
        <Type/>
      </div>
      <h2>About Rubbysoft</h2>
      <p>
        Rubbysoft is dedicated to developing user-friendly and innovative software solutions. Our mission is to provide seamless and enjoyable experiences for our users through our applications.
      </p>
      <div className='type-text'>
        <RubbyAboutType/>
      </div>
      <p>
        Contact Rubbysoft:
        <center>
        <ul>
          <li>
            <i className="fab fa-instagram"></i> Instagram: <a href="https://instagram.com/rubbysoft">rubbysoft.co</a>
          </li>
          <li>
          <i className="fas fa-envelope"></i> Email: <a href="mailto:rubbysoft.co@gmail.com">rubbysoft.co@gmail.com</a>
          </li>
          <li>
            <i className="fab fa-github"></i> GitHub: <a href="https://github.com/rubbysoft">RubbySoft</a>
          </li>
        </ul>
        </center>
        <Subscribe/>
      </p>
      <h2>About the Developer</h2>
      <p>
        This application was developed by Siddhesh More, a passionate full stack web developer with expertise in various modern web technologies. Siddhesh is currently pursuing a Diploma in Computer Engineering at Mahaveer Polytechnic, Nashik.
      </p>
      <div className='type-text'>
        <MeType/>
      </div>
      <p>
        Contact Siddhesh More:
        <ul>
          <li>
            <i className="fas fa-briefcase"></i> Portfolio: <a href="https://siddhuu.vercel.app/">siddhesh0002t.com</a>
          </li>
          <li>
            <i className="fas fa-envelope"></i> Email: <a href="mailto:siddeshmore145@gmail.com">siddeshmore145@gmail.com</a>
          </li>
          <li>
            <i className="fas fa-phone"></i> Phone: +91 9527024172
          </li>
          <li>
            <i className="fab fa-instagram"></i> Instagram: <a href="https://instagram.com/siddhesh0002t">Siddhesh0002T</a>
          </li>
          <li>
            <i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/siddhesh0002t">siddhesh0002t</a>
          </li>
          <li>
            <i className="fab fa-github"></i> GitHub: <a href="https://github.com/siddesh0002t">Siddesh0002T</a>
          </li>
        </ul>
      </p>
      <br /><br />
      <p>
        Contact Yuvraj Chaudhari:
        <ul>
         
          <li>
            <i className="fas fa-envelope"></i> Email: <a href="yuvrajsc42@gmail.com">yuvrajsc42@gmail.com</a>
          </li>
          <li>
            <i className="fas fa-phone"></i> Phone: +91 9699674627
          </li>
          <li>
            <i className="fab fa-github"></i> GitHub: <a href="https://github.com/YUVRAJ007137">YUVRAJ007137</a>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default About;
