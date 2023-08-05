import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

// link to "/"
const Header = () => (
  <div>
    <style jsx>
      {`
        p {
          font-family: sans-serif;
          color: gold;
          margin-bottom: 0.625rem;
        }
      `}
    </style>
    <Link href="/">
      <p>Home</p>
    </Link>
  </div>
);

export default Header;
