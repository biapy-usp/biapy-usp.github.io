import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Conteudo } from './pages/Conteudo';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="conteudo" element={<Conteudo />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
