import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const DataContext = React.createContext(null);

const BASE_URL = "https://rickandmortyapi.com/api/character";

function DataProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [, setFilter] = useState({});

  const getAllCharacters = async (
    url = BASE_URL,
    isPagination = false,
    characterFilter
  ) => {
    setLoading(true);
    try {
      const { status, data } = await axios.get(url, {
        params: characterFilter,
      });
      if (status === 200 && data?.results?.length) {
        if (isPagination && characters?.length) {
          setCharacters([...characters, ...data?.results]);
        } else {
          setCharacters(data?.results);
        }
        setFilter(characterFilter);
        setNextPage(data?.info?.next);
      } else {
        toast("Erro ao obter personagens", { type: "error" });
      }
    } catch (e) {
      toast("Erro ao obter personagens", { type: "error" });
    }
    setLoading(false);
  };

  const loadMore = async () => {
    if (nextPage) {
      await getAllCharacters(nextPage, true);
    } else {
      toast("Não há mais personagens para buscar.", { type: "error" });
    }
  };

  const getAllCharactersFiltered = async (filter) => {
    await getAllCharacters(BASE_URL, false, filter);
  };

  return (
    <DataContext.Provider
      value={{
        getAllCharacters,
        characters,
        loading,
        loadMore,
        getAllCharactersFiltered,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
