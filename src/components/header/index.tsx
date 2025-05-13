import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#fff",
        padding: "0.2rem 0.1rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        height: "8rem",
      }}
    >
      <img
        src="/climalogo.png"
        alt="Logo"
        className="logo"
        width="400"
        height="200"
      />

      <nav
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#0d7290",
            textDecoration: "none",
            fontSize: "1.2rem",
          }}
        >
          Início
        </Link>
        <Link
          to="/sobre"
          style={{
            color: "#0d7290",
            textDecoration: "none",
            fontSize: "1.2rem",
          }}
        >
          Sobre
        </Link>
        <Link
          to="/contato"
          style={{
            color: "#0d7290",
            textDecoration: "none",
            fontSize: "1.2rem",
          }}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
};

export default Header;
