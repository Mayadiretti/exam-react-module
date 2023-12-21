import React,{ useState } from "react";
import SearchBar from "./SearchBar";
import PersonCard from "./PersonCard";


const apiKey= import.meta.env.VITE_API_KEY;

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = (searchValue) => {
        fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${searchValue}`)
          .then((response) => response.json())
          .then((data) => setSearchResults(data.results))
          .catch((error) => {
            setError("Si è verificato un errore durante la ricerca.");
            console.error(error);
          });
      };
      return(
        <div>
      <h1>Risultati della ricerca</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <div className="person-list">
        {searchResults.map((person) => (
          <PersonCard
            key={person.id}
            id={person.id}
            name={person.name}
            occupation={person.known_for_department}
            sex={person.gender === 2 ? "Male" : "Female"}
            popularity={person.popularity}
            works={
              person.known_for && Array.isArray(person.known_for)
                ? person.known_for.map((work) => work.title)
                : []
            }
          />
        ))}
      </div>
    </div>

      )
}
export default SearchPage