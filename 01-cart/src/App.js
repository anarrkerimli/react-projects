import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalContext } from "./context";
import Nav from "./Nav";
import Cart from "./CartContainer";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      </main>
    );
  }
  return (
    <>
      <div>
        <Nav />
        <div className="container">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
