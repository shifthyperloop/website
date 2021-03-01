import styled from "styled-components";

export const LinkButton = styled.a`
  border: 2px solid #3189c9;
  background: #fff2;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 50px;
  padding: 0.80rem 0.50rem;
  color: #fff;
  text-decoration: none;
  line-height: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #3189c9;
  }
`;

export const Button = styled.div`
  border: 2px solid #3189c9;
  background: #fff2;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 200px;
  width: 20%;
  min-height: 50px;
  height: 100%;
  cursor: pointer;
  padding: 0.25rem 0.25rem;
  color: #fff;
  text-decoration: none;
  line-height: 1rem;
  font-size: 1rem;
  font-weight: 600;
  
  &:hover {
    background-color: #3189c9;
  }
`;
