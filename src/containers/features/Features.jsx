import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'BUIDL',
    text: 'Ready to go from dreaming to doing? Learn how Web3 is disrupting the current Internet protocols , Applications of blockchain in different industry , What does Web 3.0 actually signifies. So you can understand how to prototype , BUIDL, launch and engage.',
  },
  {
    title: 'Grow',
    text: 'Growth requires flexibility, scalability, creativity and power . Explore how Builders of Web3 can empower youe teams and grow your projects - at any size company , in any industry and on any team.',
  },
  {
    title: 'Collaborate',
    text: 'Great Ideas only get better when we share them.Discover how Builders of Web3 helps teams and Individuals  break down silos , create unique experiences efficiently and effectively together.',
  },
  {
    title: 'Onboarding to Web 3',
    text: 'Getting Familiarized with Web 3 is now simple Builders of Web3 is focused on spreading awareness and education about Web3.Committed to onboard the next millions from Web 2 to Web 3 ensuring a smoother transition and bridging the gap between.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Opportunities</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
