//@ts-ignore
import styled from "styled-components";

export const StyledTable = styled.table`
  max-width:${(props: { maxWidth: string }) => props.maxWidth}px;
  width: 100%;
  border-collapse: collapse;
  padding: 0;
  background-color: white;
  color #3d3d3d;

  th {
    text-align: left;
  }

  thead tr{
    background-color:#e5eaf5;
  }

  thead th{
    cursor:pointer;

    p{
      display:inline-block;
    }
  }

  th,
  td {
    border: 1px solid #dfdfdf;
    padding: 1rem;
    text-align: center;
  }

  tbdoy td:nth-child(1){
    max-width:10%;
    width:100%;
  }
  tbody td:nth-child(3){
    max-width:10%;
    width:100%;
  }
  tr {
    transition: background 0.6s;
    width:100%;
  }

  tbody td:nth-child(2){
    max-width:80%;
    width:100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }


  tbody tr:hover {
    background: red;
  }
  td a {
    text-decoration:none;
    color:inherit;
  }

  @media only screen and (max-width:480px)  {

    max-width: ${(props: { maxWidth: string }) => props.maxWidth}px;
    width:100%;
    margin:0 auto;

    thead th:first-child, thead th:last-child{
      display:none;
    }
    tbody td:nth-child(odd){
      display:none;
    }
    thead, tbody, tr,tbody td:nth-child(2){
      max-width:${(props: { maxWidth: string }) => props.maxWidth}px;
      width:100%;
    }

  }
`;
