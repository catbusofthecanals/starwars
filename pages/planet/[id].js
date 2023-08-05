import { useState, useEffect } from "react";
import Planet from "../../components/Planet";
import MyLayout from "../../components/MyLayout";

// export fetch function with getServerSideProps
export async function getServerSideProps(context) {
  // fetch function from star wars api using passed id parameter
  const res = await fetch(`https://swapi.dev/api/planets/${context.params.id}`);
  const data = await res.json();
  // if no data, with getServerSideProps, not found boolean redirects to 404 page
  if (data.detail === "Not found") {
    return {
      notFound: true,
    };
  }
  // else return resident information
  return { props: { planet: data } };
}

// pass planet prop through resident page
function PlanetPage({ planet }) {
  // set initial resident state
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    // get planet resident inforation from api
    const fetchData = async () => {
      // declare empty array
      let planetResidents = [];
      const res = await fetch("https://swapi.dev/api/people/");
      const { results } = await res.json();
      planetResidents = [...planetResidents, ...results];
      // set residents state with fetched resident results
      setResidents(planetResidents);
    };
    // call function
    fetchData();
  }, []);
  return (
    <MyLayout>
      <ul>
        <Planet key={planet.name} planet={planet} residents={residents} />
      </ul>
    </MyLayout>
  );
}

export default PlanetPage;
