import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowsList from "./component/ShowsList";
import ShowsSummary from "./component/ShowsSummary";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<ShowsList />} />
          <Route path='summary' element={<ShowsSummary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
