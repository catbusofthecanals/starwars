import { useState } from "react";
import MyLayout from "../components/MyLayout";
import Link from "next/link";

// pass planet information through planet component
export default function Planet(props) {
  // get values from passed props
  const { name, climate, population, terrain, url } = props.planet;
  const residents = props.residents.filter((resident) => {
    return resident.homeworld === url;
  });
  return (
    <div>
      <style jsx>
        {`
          .planet {
            border: 3px solid gold;
            color: gold;
            display: inline-block;
            padding: 1.25rem;
            width: 140px;
            background-color: rgba(0, 0, 0, 0.9);
          }
        `}
      </style>
      <li className="planet" key={name}>
        <h2>{name}</h2>
        <p>Climate: {climate}</p>
        <p>Population: {population}</p>
        <p>Terrain: {terrain}</p>
        {residents.length > 0 && (
          <>
            <p>List of residents:</p>
            {/* map resident props with link to each person id page, get id from residents url */}
            {residents &&
              residents.map((resident) => (
                <Link
                  key={resident.name}
                  href={`/resident/${parseInt(resident.url.split("/")[5])}`}
                >
                  {resident.name}
                </Link>
              ))}
          </>
        )}
      </li>
    </div>
  );
}
