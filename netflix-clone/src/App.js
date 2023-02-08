import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import AllCards from "./components/AllCards";
import TvShows from "./components/TvShows";
import Jumbo from "./components/Jumbo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShowSeries from "./components/TvShowSeries";
import MovieDetails from "./components/MovieDetails";
import Profile from "./components/Profile";
import NotFoundPage from "./components/NotFoundPage";
// import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="body-container">
        <MyNav />

        {/* <Profile /> */}
        <Routes>
          <Route element={<Jumbo />} path="/" />
          <Route element={<TvShowSeries />} path="/tv-shows" />
          <Route element={<MovieDetails />} path="/movie-details/:movieId" />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
        <Routes>
          <Route element={<TvShows />} path="/" />
        </Routes>
        <Routes>
          <Route element={<AllCards />} path="/" />
          <Route element={<Profile />} path="/profile" />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
