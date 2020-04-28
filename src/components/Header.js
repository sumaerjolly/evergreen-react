import React from 'react';
import styled from 'styled-components';
import illustration from '../images/illustration.svg';

function Header() {
  return (
    <Container>
      <div className="left">
        <h1>Hi, I am Sumaer Jolly</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          maiores fugiat, assumenda nesciunt accusantium quibusdam doloremque
          ratione tempora numquam voluptatibus debitis, quo molestias dolorem ut
          rerum consequuntur et hic consequatur labore est vero sit consectetur
          soluta. Quibusdam laborum provident quasi! Vitae obcaecati possimus
          nemo placeat in nihil alias consectetur quisquam temporibus magnam
          fugiat beatae doloremque at dolor repellendus culpa vel velit facilis
          fugit cumque, eligendi adipisci. Corporis nostrum ipsum ad sapiente
          eum dolores est aliquam nisi earum porro cumque modi quaerat eveniet,
          voluptate rem, laudantium odio non inventore perspiciatis! Sint
          corporis sequi numquam nesciunt possimus facere atque vel consequuntur
          modi!
        </p>
      </div>
      <div className="right">
        <img src={illustration} alt="illustration" />
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  align-content: center;
  flex-direction: column;
  justify-content: center;

  .left {
    height: 60vh;
    padding: 1em;
    text-align: left;

    h1 {
      font-weight: 900;
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    p {
      font-weight: 400;
      font-weight: 2rem;
    }
  }

  .right {
    height: 60vh;
  }

  .right img {
    display: block;
    max-height: 60vh;
    max-width: 100%;
  }
`;
