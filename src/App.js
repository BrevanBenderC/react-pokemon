import './App.css';
import { useState, useEffect } from 'react';
import filter from './components/filter/filter';
import pageLoad from './components/pageLoad/pageLoad';
import { pokemon } from './services/pokemon';

export function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
    };
    fetchData();
  });
  return (
    <div className="App">
      <filter />
      <pageLoad />
      <pageLoad pokemon={pokemon} />
    </div>
  );
}
