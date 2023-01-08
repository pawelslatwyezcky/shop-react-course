import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    font-family: "Open Sans", sans-serif;

    @media screen and (max-width: 800px) {
      position: absolute;
      top: 60%;
      font-size: 0.5rem;
      display: block;
    }
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    height: 200px;

    &:hover {
      img {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const Price = styled.span`
  width: 10%;
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
