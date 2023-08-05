import { useState, useEffect } from "react";
import Link from "next/link";
import MyLayout from "../../components/MyLayout";

// export fetch function with getServerSideProps
export async function getServerSideProps(context) {
  // fetch function from star wars api using passed id parameter
  const res = await fetch(`https://swapi.dev/api/people/${context.params.id}`);
  const data = await res.json();
  // if no data, with getServerSideProps, not found boolean redirects to 404 page
  if (data.detail === "Not found") {
    return {
      notFound: true,
    };
  }
  // else return resident information
  return { props: { resident: data } };
}

// pass resident prop through resident page
function ResidentPage({ resident }) {
  // get values from passed props
  const { name, height, mass, homeworld } = resident;
  // decalre initial state for home world information
  const [world, setWorld] = useState([]);
  // get planet url path from resident homeworld
  const planetUrl = parseInt(homeworld.split("/")[5]);

  useEffect(() => {
    const fetchData = async () => {
      // get home world inforation from api
      const response = await fetch(homeworld);
      const data = await response.json();
      // set data in world state
      setWorld(data);
    };
    // call function
    fetchData();
  }, []);

  // pass resident props through Layout component
  return (
    <MyLayout>
      <main className="main">
        <div className="card">
          <h2>{name}</h2>
          <p>Height: {height !== "unknown" ? `${height} cm` : "unknown"}</p>
          <p>Mass: {mass !== "unknown" ? `${mass} kg` : "unknown"}</p>
          {world.name && (
            <>
              {/* link to planet url path and get homeworld name from home state */}
              <p>Homeworld:</p>
              <Link href={`/planet/${planetUrl}`}>{world.name}</Link>
            </>
          )}
        </div>
      </main>
    </MyLayout>
  );
}

export default ResidentPage;
