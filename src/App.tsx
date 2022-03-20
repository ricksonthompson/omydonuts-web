import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Donuts } from "./pages/Donuts";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donuts" element={<Donuts />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  )
}
