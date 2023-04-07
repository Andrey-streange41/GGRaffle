import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/common/header/Header";
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { fetchTickets } from "./app/slices/tickets.slice";
import "swiper/swiper.min.css";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.title = 'GG Raffles';
    
    (async function () {
      dispatch(fetchTickets());
    })();
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
