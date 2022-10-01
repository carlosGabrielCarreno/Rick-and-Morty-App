import { useFetch } from './hooks/useFetch';
import { Route, Routes } from 'react-router-dom';
import { Character } from './components/Character';
import { Home } from './components/Home';

function App() {
  const { REACT_APP_API_CALL } = process.env;
  const { data, isLoading } = useFetch(REACT_APP_API_CALL);
  if (!isLoading) {
    const { results } = data;
    console.log(results);
  }
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
