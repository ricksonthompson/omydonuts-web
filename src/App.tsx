import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Donut } from "./pages/Donut";
import { SideBar } from "./components/SideBar";
import { Donuts } from "./pages/Donuts";

export function App() {
  return (
    <>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donuts" element={<Donuts />} />
          <Route path="/donuts/id" element={<Donut />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  )
}
