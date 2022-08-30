import React, { useEffect } from "react";
import axios from "axios";
import { db } from "./firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

const Form = ({
  setSearch,
  setIsError,
  setIsLoading,
  search,
  setData,
  data,
}) => {
  const gifsCollectionRef = collection(db, "gifs");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsError(false);
    setIsLoading(true);
    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "QfQd5BmFKliDrXj354yu6e49eFTyfdHN",
          q: search,
          limit: 10,
        },
      });
      setData(results.data.data);
      localStorage.setItem("Search field", search);
      addDoc(gifsCollectionRef, { giphySearched: search, gifsFounded: data });
    } catch (err) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 4000);
    }
    setIsLoading(false);
  };

  return (
    <form className="form-inline justify-content-center m-2">
      <input
        value={search}
        onChange={handleSearchChange}
        type="text"
        placeholder="search"
        className="form-control"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="btn btn-primary mx-2"
      >
        Go
      </button>
    </form>
  );
};
export default Form;
