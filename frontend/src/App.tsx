import { BrowserRouter, Routes, Route } from "react-router"
import Landing from "./pages/Landing.tsx"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landing /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
