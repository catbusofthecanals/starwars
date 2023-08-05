import Header from "../components/Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
};

// pass props pages through Layout component
const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style jsx global>
      {`
        body {
          font-family: sans-serif;
          background: url("https://cdn.wallpapersafari.com/24/6/T3xqnS.jpg")
            no-repeat center center fixed;
        }

        a {
          color: inherit;
          margin-bottom: 0.625rem;
          font-size: 90%;
          display: block;
        }

        h2 {
          margin-bottom: 1.25rem;
        }

        p {
          margin-bottom: 0.625rem;
        }
        .container {
          margin: 0 auto;
          max-width: 75rem;
          border-radius: 25px;
          background-color: rgba(0, 0, 0, 0.9);
          text-align: center;
          margin: 15px;
          padding: 5px;
        }

        .card {
          border: 3px solid gold;
          color: gold;
          background-color: rgba(0, 0, 0, 0.9);
          display: inline-block;
          padding: 1.25rem;
          width: 140px;
        }

        .main {
          padding: 1.25rem;
        }

        .h1 {
          margin-bottom: 2rem;
          font-size: 3rem;
          color: gold;
          text-align: center;
        }

        .ul {
          display: flex;
          flex-wrap: wrap;
          padding: 1em;
          gap: 2rem;
        }
      `}
    </style>
  </div>
);

export default Layout;
