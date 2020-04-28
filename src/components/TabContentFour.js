import React from 'react';
import styled from 'styled-components';
import Img from '../images/platform.svg';

function TabContentFour() {
  return (
    <TabContainer>
      <div className="container">
        <div className="tab-content">
          <div>
            <span className="title">
              Tell us about a platform you believe has solved a complex problem
              really well, and why. Would you change anything in their approach?
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
export default TabContentFour;

const TabContainer = styled.div`
  .container {
    margin: 0 10%;
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
  }

  .tab-content img {
    display: block;
    max-height: 450px;
    max-width: 100%;
  }

  .title {
    margin-top: 2rem;
  }

  .answer {
    font-size: 1.5rem;
    margin-top: 5rem;
  }
`;
