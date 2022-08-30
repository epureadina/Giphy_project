import React, { useState } from "react";
import "./App.css";
import Gifs from "./components/Gifs";
import Form from "./components/Form";
import Error from "./components/Error";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  return (
    <div className="m-2">
      <Error isError={isError} />
      <Form
        setSearch={setSearch}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        search={search}
        setData={setData}
        isError={isError}
        data={data}
      />
      <Gifs
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        setData={setData}
        isLoading={isLoading}
        data={data}
        isError={isError}
        setSearch={setSearch}
        search={search}
      />
    </div>
  );
};
export default App;
