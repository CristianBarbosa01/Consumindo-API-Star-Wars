import React from "react";
import "../App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import StarW from "../img/StarW.jpg";
import Page2 from "./page2";

const Page1 = () => {
  const arrayBotoes = ["FILMES", "PERSONAGENS", "PLANETAS", "NAVES"];
  const linksBotoes = (nomeBotao) => {
    switch (nomeBotao) {
      case "PERSONAGENS":
        return (
          <Link to="/personagens" className="link">
            <p>Personagens</p>
          </Link>
        );
      case "FILMES":
        return (
          <Link to="/filmes" className="link">
            <p>Filmes</p>
          </Link>
        );
      case "PLANETAS":
        return (
          <Link to="/planetas" className="link">
            <p>Planetas</p>
          </Link>
        );
      case "NAVES":
        return (
          <Link to="/naves" className="link">
            <p>Naves</p>
          </Link>
        );

      default:
        return (
          <Link to="/" className="link">
            <p>Teste</p>
          </Link>
        );
    }
  };

  return (
    <div className="back">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="title">STAR WARS</h1>
      </div>
      <div
        style={{
          display: "flex",
          position: "fixed",
          justifyContent: "center",
          marginTop: "50%",
          maxWidth: "40%",
        }}
      >
        <table style={{ display: "flex", width: "auto" }}>
          <tr style={{ display: "flex" }}>
            <th>
              {arrayBotoes?.map((b) => {
                return <button>{linksBotoes(b)}</button>;
              })}
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Page1;
