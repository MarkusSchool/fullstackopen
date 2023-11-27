import React, { useState, useEffect } from 'react';
import getCountries from './services/getCountries';
import { ShowInfo, ShowResults } from './components/CountryInfo';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newMaaHaku, setNewMaaHaku] = useState("");
  const [maaHakuResults, setMaaHakuResults] = useState([]);
  const [valittuMaa, setValittuMaa] = useState(null);

  useEffect(() => {
    getCountries
      .GetCountries()
      .then(response => {
        setCountries(response);
      });
  }, []);

  useEffect(() => {
    if (newMaaHaku && countries.length > 0) {
      const regex = new RegExp(newMaaHaku.trim(), 'i');
      setMaaHakuResults(countries.filter(country => regex.test(country.name.common)));
    }
  }, [newMaaHaku]);

  const handleMaaHakuChange = (event) => {
    event.preventDefault();
    setNewMaaHaku(event.target.value);
    setValittuMaa(null);
  };

  return (
    <div>
      <form>find countries: <input value={newMaaHaku} onChange={handleMaaHakuChange} /></form>
      {(() => {
      switch (true) {
        case Boolean(valittuMaa):
          return <ShowInfo country={valittuMaa} />;
        case maaHakuResults.length === 1:
          return <ShowInfo country={maaHakuResults[0]} />;
        case maaHakuResults.length > 10:
          return <p>too many matches, specify another filter</p>;
        default:
          return <ShowResults countries={maaHakuResults} selectionHandler={setValittuMaa} />;
      }
    })()}
    </div>
  );
};

export default App;