import React from 'react';
import styled from 'styled-components';
import Img from '../images/third-tab.svg';
import { generateMedia } from 'styled-media-query';

function TabContentThree() {
  return (
    <TabContainer>
      <div className="container">
        <div className="tab-content">
          <div className="content">
            <span className="title">
              Look at this list of tasks and tell us which two you are excited
              by, which two you want to learn and the two you don’t want to do.
            </span>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur, at dignissimos blanditiis quia voluptates nulla!
              Numquam asperiores modi voluptatum deserunt ut quibusdam
              architecto assumenda cupiditate ipsa exercitationem, id repellat
              officia quo soluta. Doloribus nisi laborum hic labore corporis
              quae, sint libero recusandae tempore, odio voluptate explicabo
              adipisci quo cupiditate quas.
            </p>
          </div>
          <img src={Img} alt="tab-1-pic" />
        </div>
      </div>
    </TabContainer>
  );
}
export default TabContentThree;

// media queries

const customMedia = generateMedia({
  tablet: '960px'
});

// styling

const TabContainer = styled.div`
  .container {
    margin: 0 10%;
  }

  .content {
    padding-bottom: 2rem;
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3em;
    // align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
    max-height: 500px;
    // overflow: hidden;
    ${customMedia.lessThan('tablet')`
      grid-template-columns: 100%;
      text-align: center;
      padding-left: 0;
      padding-right: 0;
      grid-gap: 0;
      grid-template-areas: 
      "top"
      "bottom"
  `}
  }

  .tab-content img {
    display: block;
    max-height: 500px;
    max-width: 100%;
    ${customMedia.lessThan('tablet')`
      padding:0;
      grid-area: top;
      margin: 0;
  `}
  }

  .title {
    margin-top: 2rem;
    ${customMedia.lessThan('tablet')`
     font-size: 1.5rem;
     margin-top: 0.5rem;
  `}
  }

  .answer {
    font-size: 1.5rem;
    margin-top: 5rem;

    ${customMedia.lessThan('tablet')`
     font-size: 1rem;
     margin-top: 2rem;
     
  `}
  }
`;
