import React from "react";

const Error = ({ isError }) => {
  if (isError) {
    return (
      <div className="alert alert-warning alert-danger fade show" role="alert">
        Unable to get Gifs,please try again in a few minutes!
      </div>
    );
  }
};

export default Error;
