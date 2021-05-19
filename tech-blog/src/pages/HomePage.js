import React from 'react';
import {Button} from 'react-bootstrap';
import { AiFillTwitterCircle, AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

import HomeImage  from '../images/home-image.jpg';

const HomePage = () => {
  return (
    <>
    <div id="home-title">The 302</div>
    <h2>Helping you <b>find</b> solutions and ideas.</h2>
    <h3>The 302 is a tech blog curated by experts to deliver news and opinions on the latest tech.</h3>

    <form id="subscribe-form">
      <input type="text" id="email" name="email" />
      <Button id="subscribe"> Subscribe </Button>
    </form>
    <div id="social-media">
      <AiFillGoogleCircle size={50} />
      <AiFillTwitterCircle size={50} />
      <FaFacebook size={45}/>
      <MdEmail size={50}/>
    </div>
    </>
  );
};

export default HomePage;
