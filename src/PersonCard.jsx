import React from "react";

const PersonCard = ({id, name, occupation, sex, popularity, works, imagePath}) =>{
    return(
        <div className="person-card">
           <img src={imagePath} alt={`${name} profile`} />
                <div className="person-details">
                    <h2>{name}</h2>
                    <p>
                        occupation:{occupation}
                    </p>
                    <p>
                        sex:{sex}
                    </p>
                    <p>
                        popularity:{popularity}
                    </p>
                    <div>
                    <p> Works:</p>
                    <ul className="work-list">
                        {works && works.length > 0 ? (
                        works.map((work, i) => <li key={i}>{work}</li>)
                        ) : (
                        <li>No famous works available</li>
                        )}
                    </ul>
                    </div>
                </div>
        </div>
    )
}

export default PersonCard