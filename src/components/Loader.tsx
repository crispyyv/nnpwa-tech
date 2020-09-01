import React from "react";
//@ts-ignore ignore because @types/styled-components get conflict types(idk why)
import styled from "styled-components";

const Div = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}) => {
  return <Div />;
};
