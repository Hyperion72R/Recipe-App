import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category></Category>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
        <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}

export default App;
