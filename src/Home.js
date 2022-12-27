import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div>Home</div>
          <>
            <Link to="/assets">assets</Link>
            <br/>
            <Link to="/clients">clients</Link>
          </>
  
    </>
  );
};
