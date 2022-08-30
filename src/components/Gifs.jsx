import React, { useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import EmptyState from "./EmptyState";
import NoGiphyFounded from "./NoGiphyFounded";

const Gifs = ({
  setIsError,
  setIsLoading,
  setData,
  isLoading,
  data,
  search,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "QfQd5BmFKliDrXj354yu6e49eFTyfdHN",
          },
        });
        setData(results.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 4000);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const openGiphy = (url) => {
    if (url) {
      window.open(url, "blank");
    }
  };

  const renderGifs = () => {
    if (isLoading) {
      return <Loader />;
    } else if (!isLoading && data.length === 0) {
      return <NoGiphyFounded />;
    } else {
      return data.map((el) => {
        return (
          <>
            <div key={el.id} className="gif" onClick={() => openGiphy(el.url)}>
              <img
                src={el.images.fixed_height.url}
                alt="Not found"
                className="gif-img"
              />
            </div>
          </>
        );
      });
    }
  };

  return (
    <div className="container-gifs">
      {renderGifs()}
      {search.length === 0 && !isLoading ? <EmptyState /> : renderGifs}
    </div>
  );
};

export default Gifs;
