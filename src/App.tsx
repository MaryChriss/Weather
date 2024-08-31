import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import("./Pages/Home/Home"))
const LazySearch = lazy(() => import('./Pages/Search/Search'))
const LazyProfile = lazy(() => import('./Pages/Profile/Profile'))


function App() {
  return (

    <BrowserRouter>
      <Suspense fallback={<>Carregando...</>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/busca" element={<LazySearch />} />
          <Route path="/perfil" element={<LazyProfile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
