import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/shared/Header/Header";
import HomePage from "pages/HomePage";
import SprintsPage from "pages/SprintsPage";
import { TicketsSprintsProvider } from "context/ticketsSprintsContext";

function App() {
  return (
    <div className="App">
      <TicketsSprintsProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sprints" element={<SprintsPage />} />
          </Routes>
        </BrowserRouter>
      </TicketsSprintsProvider>
    </div>
  );
}

export default App;
