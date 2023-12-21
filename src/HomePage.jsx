import React, {useEffect, useState} from "react";
import PersonCard from "./PersonCard";
import SearchBar from "./SearchBar";


const apiKey = import.meta.env.VITE_API_KEY;

const HomePage = () =>{
    const [popularPeople, setPopularPeople]=useState([]);
    const [error, setError] = useState();

    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`)
        .then(response=> response.json())
        .then(obj=>setPopularPeople(obj.results))
        .catch(error => {
            setError(`potrebbe essere presente un errore, prova di nuovo!`)
            console.error(error);
            setError(`there was a problem, try again!`)
        })
    }, []);

    
    const search = async (searchValue)=>{
        const searchParams = new URLSearchParams({
            api_key:apiKey,
            query: searchValue,
        });
       const response = await fetch(`https://api.themoviedb.org/3/search/person?${searchParams.toString()}`)
       const {results}= await response.json();
       setPopularPeople(results)

    }
    

    return(
        <div>
            <h1>Personaggi più popolari del giorno</h1>
            <SearchBar onSearch={search}/>
            <div className="person-list">
                {popularPeople.map(person=>(
                    <PersonCard
                    imagePath={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    occupation={person.known_for_department}
                    sex= {person.gender === 2 ? 'Male':'Female'}
                    popularity={person.popularity}
                    works={person.known_for && Array.isArray(person.known_for) ? person.known_for.map(work => work.title) : []}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePage