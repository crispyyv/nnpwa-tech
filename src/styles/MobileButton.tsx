//@ts-ignore
import styled from "styled-components";

export const MobileButton = styled.button`
  display: none;
  @media only screen and (max-width: 480px) {
    display: block;
    position: absolute;
    right: 10px;
    top: 35px;
  }
`;
