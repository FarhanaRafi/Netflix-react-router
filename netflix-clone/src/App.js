import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import AllCards from "./components/AllCards";
import TvShows from "./components/TvShowNav";
import Jumbo from "./components/Jumbo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShowNav from "./components/TvShowNav";
// import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="body-container">
        <MyNav />

        {/* <Profile /> */}
        <Routes>
          <Route element={<Jumbo />} path="/" />
          <Route element={<TvShows />} path="/tv-shows" />
        </Routes>
        <Routes>
          <Route element={<TvShowNav />} path="/" />
        </Routes>
        {/* <TvShows /> */}
        <Routes>
          <Route element={<AllCards />} path="/" />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
