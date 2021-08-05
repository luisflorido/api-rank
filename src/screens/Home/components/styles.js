import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 200px;
  background-color: #0b6c7c;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Name = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 1.3em;
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 15px;
  padding-top: 5px;
`;
