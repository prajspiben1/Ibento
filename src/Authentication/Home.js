import React from "react";
import app from "./Firebase";

const Home = () => {
  return (
    <div className="container">
      <header>Home</header>

      
    <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;