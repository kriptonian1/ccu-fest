import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <p>Builders of Web 3 X Make Calcutta Relevant Again </p>
      <h4>Presents</h4>
      <h1 className="gradient__text">CCU Festival (BUIDL)</h1>
      <p>Join us as we celebrate Calcutta like never before.Curated with care and love from Make Calcutta Relevant Again an Initiative to bring back Calcutta Glory and Builders of Web3 an initiative to make Calcutta Relevant in Web 3.</p>
      <div className="gpt3__header-content__input">
        <button type="button">29th October,Taal Kutir</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
