import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Characters } from './components/Characters';

function App() {
  return (
    <div className="bg-neutral-300 w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="characters" element={<Characters />} />
        <Route index path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
