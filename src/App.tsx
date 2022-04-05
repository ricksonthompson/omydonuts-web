import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DonutInfo } from "./pages/DonutInfo";
import { Donuts } from "./pages/Donuts";

export function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donuts" element={<Donuts />} />
          <Route path="/dev" element={<DonutInfo />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  )
}
