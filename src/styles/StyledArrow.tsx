//@ts-ignore
import styled from "styled-components";
export const Link = styled.div`
  position: fixed;
  right: 2.5rem;
  bottom: 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    font-size: 1.8rem;
    font-weigth: bold;
    text-decoration: none;
  }
  div {
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    position: absolute;
    left: 35%;
    top: 45%;
    transform: rotate(-45deg);

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      border-width: 3px 3px 0 0;
      border-style: solid;
      border-color: #fafafa;
      transition: 0.2s ease;
      display: block;
      transform-origin: 100% 0;
    }

    &:after {
      content: "";
      float: left;
      position: relative;
      top: -100%;
      width: 100%;
      height: 100%;
      border-width: 0 3px 0 0;
      border-style: solid;
      border-color: #fafafa;
      transform-origin: 100% 0;
      transition: 0.2s ease;
    }

    &:hover::after {
      border-color: orange;
    }
    &:hover::before {
      border-color: orange;
    }
  }
`;
