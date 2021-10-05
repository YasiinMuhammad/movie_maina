import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row isLargeRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy" fetchUrl={requests.fetchComedy} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror" fetchUrl={requests.fetchHorror} />
      <Row title="Romance" fetchUrl={requests.fetchRomance} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
