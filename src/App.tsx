import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Donut } from "./pages/Donut";
import { SideBar } from "./components/SideBar";
import { Donuts } from "./pages/Donuts";
import { Carousel } from "./components/Carousel";

export function App() {
  return (
    <>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donuts" element={<Donuts />} />
          <Route path="/donuts/id" element={<Donut />} />
          <Route path="/dev" element={<Carousel />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  )
}
