import styled from "styled-components";

export const LinkButton = styled.a`
  border: 1px solid #3189c9;
  background: #fff2;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 50px;
  padding: 0.51rem 0.21rem;
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

export const ButtonTitle = styled.h3`
  margin: auto;
`

const commonStyle = `
  border: 1px solid #3189c9;
  background: #fff2;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 200px;
  min-height: 50px;
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
`

export const Button = styled.div`
  ${commonStyle}
`;

export const SmallButton = styled.div`
  ${commonStyle}
  min-height: 30px;
`;
