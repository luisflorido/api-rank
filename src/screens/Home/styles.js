import styled from "styled-components";

export const Container = styled.div`
  background-color: #074b56;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const CharactersContainer = styled.div`
  display: flex;
  flex: 1;
  /* justify-content: center;
  align-items: center; */
  align-content: center;
  background-color: #074b56;
  flex-wrap: wrap;
`;

export const Text = styled.span`
  color: #fff;
  font-size: 1.2em;
`;

export const LoadMore = styled.button`
  border: 0;
  background-color: #0d8296;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  justify-content: center;
  align-content: center;
  display: flex;
  margin-top: 20px;
`;
export const TextInput = styled.input``;
export const SearchLabel = styled.span`
  color: #fff;
  font-size: 1.3em;
  margin-right: 10px;
`;
