import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
// import fetch from "isomorphic-unfetch";
import Planet from "../components/Planet";
import MyLayout from "../components/MyLayout";

/* learned about exporting fetch functions with getServerSideProps, which dynamically renders the page with props before loading. 
Available here: https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props */

export async function getServerSideProps() {
  // fetch planet information from Star Wars API
  const fetchPlanets = async () => {
    // declare empty array
    let planets = [];
    const res = await fetch("https://swapi.dev/api/planets/");
    const { results } = await res.json();
    // set planets with fetch results
    planets = [...planets, ...results];
    // return planet information
    return planets;
  };

  // fetch resident information from Star Wars API
  const fetchResidents = async () => {
    // declare empty array
    let residents = [];
    const res = await fetch("https://swapi.dev/api/people/");
    const { results } = await res.json();
    // set residents with fetch results
    residents = [...residents, ...results];
    // return residents information
    return residents;
  };

  // set constants with props from fetch functions
  const planets = await fetchPlanets();
  const residents = await fetchResidents();

  // return planet and residents information as props to pass through components
  return { props: { planets, residents } };
}

export default function Home(props) {
  const { planets, residents } = props;

  return (
    // map planets and people throughout Planet component
    <MyLayout>
      <div className="container">
        <main className="main">
          <h1 className="h1">A Guide to the Star Wars Universe</h1>
          <ul className="ul">
            {planets.length > 0 ? (
              planets.map((planet) => {
                // if there are planets available then pass through planet component
                return (
                  <Planet
                    key={planet.name}
                    planet={planet}
                    residents={residents}
                  />
                );
              })
            ) : (
              // else display loading
              <p>Loading...</p>
            )}
          </ul>
        </main>
      </div>
    </MyLayout>
  );
}
