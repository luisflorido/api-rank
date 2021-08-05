import React, { useContext, useEffect, useState } from "react";
import Lottie from "react-lottie";
import loadingJson from "../../assets/loading.json";
import useDebounce from "../../hooks/useDebounce";
import { DataContext } from "../../components/DataProvider";
import {
  Container,
  CharactersContainer,
  Text,
  LoadMore,
  PaginationContainer,
  SearchContainer,
  TextInput,
  SearchLabel,
} from "./styles";
import Character from "./components/Character";
import "./styles.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingJson,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function App() {
  const [searchName, setSearchName] = useState("");
  const {
    getAllCharacters,
    characters,
    loading,
    loadMore,
    getAllCharactersFiltered,
  } = useContext(DataContext);
  const searchNameDebounced = useDebounce(searchName, 1000);

  useEffect(() => {
    getAllCharacters();
  }, []);

  useEffect(() => {
    if (searchNameDebounced) {
      getAllCharactersFiltered({
        name: searchNameDebounced,
      });
    } else {
      getAllCharacters();
    }
  }, [searchNameDebounced]);

  const renderContent = () => {
    if (loading) {
      return <Lottie options={defaultOptions} height={150} width={150} />;
    }
    if (!characters?.length) {
      return <Text>Nenhum personagem encontrado.</Text>;
    }
    return characters?.map((data) => <Character key={data?.id} data={data} />);
  };

  const handleChange = ({ target: { value } }) => {
    setSearchName(value);
  };

  return (
    <Container id="root">
      <SearchContainer>
        <SearchLabel>Filtro por nome:</SearchLabel>
        <TextInput value={searchName} onChange={handleChange} />
      </SearchContainer>
      <CharactersContainer>{renderContent()}</CharactersContainer>
      <PaginationContainer>
        <LoadMore onClick={loadMore}>Carregar mais</LoadMore>
      </PaginationContainer>
    </Container>
  );
}

export default App;
