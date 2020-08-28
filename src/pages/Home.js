import React from "react";
import MovieGallery from "../components/MovieGallery";

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="container">
            <ul>
              <li>The Shoppies</li>
              <li>
                built and designed by <strong>satvir sandhu</strong>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content container">
          <div className="left">
            <h1>Celebrate Cinema</h1>
            <p>Nominate your favourite movies for The Shoppies.</p>
            <button>Get Started</button>
          </div>
          <div className="right">
            <MovieGallery />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
