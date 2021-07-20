import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

import tato from "../img/tato.jpg";
import ald from "../img/ald.png";
import ya from "../img/ya.jpg";
import hoth from "../img/hoth.jpg";
import dago from "../img/dago.jpg";
import bes from "../img/bes.png";
import end from "../img/end.png";
import na from "../img/na.jpg";
import cor from "../img/cor.png";
import ka from "../img/ka.png";

import LoadingGif from "../img/loading.gif";

const Page4 = () => {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    await axios.get("https://swapi.dev/api/planets").then((resp) => {
      setDados({ dados: resp.data?.results });
    });
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  const getImage = (nome) => {
    switch (nome) {
      case "Tatooine":
        return tato;
      case "Alderaan":
        return ald;
      case "Yavin IV":
        return ya;
      case "Hoth":
        return hoth;
      case "Dagobah":
        return dago;
      case "Bespin":
        return bes;
      case "Endor":
        return end;
      case "Naboo":
        return na;
      case "Coruscant":
        return cor;
      case "Kamino":
        return ka;
      // default:
      //   return "não é";
    }
  };

  const getLink = (nome) => {
    switch (nome) {
      case "Tatooine":
        return "https://en.wikipedia.org/wiki/Tatooine";
      case "Alderaan":
        return "https://en.wikipedia.org/wiki/Alderaan";
      case "Hoth":
        return "https://en.wikipedia.org/wiki/Hoth";
      case "Dagobah":
        return "https://en.wikipedia.org/wiki/Dagobah";
      case "Bespin":
        return "https://starwars.fandom.com/wiki/Bespin";
      case "Endor":
        return "https://starwars.fandom.com/pt/wiki/Endor";
      case "Naboo":
        return "https://starwars.fandom.com/pt/wiki/Naboo";
      case "Coruscant":
        return "https://en.wikipedia.org/wiki/Coruscant";
      case "Kamino":
        return "https://starwars.fandom.com/pt/wiki/Kamino";
    }
  };

  return (
    <>
      <div className="image"></div>
      <div></div>
      <div className="back">
        <h1 className="title">PLANETAS</h1>
        {isLoading && (
          <div className="loading">
            <img
              style={{ width: 250, height: 300 }}
              src={LoadingGif}
              alt={"Loading"}
            />
          </div>
        )}
        {!isLoading && (
          <div
            style={{
              backgroundColor: "transparent",
              top: 205,
              position: "absolute",
              justifyContent: "center",
              padding: 5,
              display: "flex",
              flexWrap: "wrap",
              width: "auto",
              height: "auto",
            }}
          >
            {dados?.dados?.map((p, index) => (
              <a
                href={getLink(p.name)}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div
                  key={index}
                  style={{
                    display: "flex",
                    width: 250,
                    height: 400,
                    boxShadow: "5px 5px 10px 0px #43434b",
                    backgroundColor: "#c4c4c4",
                    margin: 5,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flexFlow: "column-nowrap",
                  }}
                >
                  <div>
                    <img
                      style={{
                        width: 230,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        display: "flex",
                        alignItems: "top",
                        height: 300,
                      }}
                      src={getImage(p.name)}
                      alt={p.name}
                    />
                    <p style={{ margin: 5 }}>Nome: {p.name}</p>
                    <p style={{ margin: 5 }}>População: {p.population}</p>
                    <p style={{ margin: 5 }}>Diametro: {p.diameter}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Page4;
