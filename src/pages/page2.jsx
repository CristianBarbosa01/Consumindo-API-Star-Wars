import React, { useEffect, useState } from "react";
import "../App.css";

import axios from "axios";

import C3PO from "../img/C3PO.jpg";
import R2D2 from "../img/R2D2.jpg";
import DarthVader from "../img/DarthVader.jpg";
import Leia from "../img/Leia.jpg";
import Luk from "../img/Luk.jpg";
import Owen from "../img/Owen.jpg";
import Beru from "../img/Beru.jpg";
import BiggsDarklighter from "../img/BiggsDarklighter.jpg";
import R5 from "../img/R4.jpg";
import Obi from "../img/Obi.jpg";

import LoadingGif from "../img/loading.gif";

const Page2 = () => {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    await axios.get("https://swapi.dev/api/people").then((resp) => {
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
      case "C-3PO":
        return C3PO;
      case "Leia Organa":
        return Leia;
      case "Darth Vader":
        return DarthVader;
      case "Beru Whitesun lars":
        return Beru;
      case "R5-D4":
        return R5;
      case "Owen Lars":
        return Owen;
      case "Obi-Wan Kenobi":
        return Obi;
      case "Biggs Darklighter":
        return BiggsDarklighter;
      case "Luke Skywalker":
        return Luk;
      case "R2-D2":
        return R2D2;
      default:
        return "não é";
    }
  };

  const getLink = (nome) => {
    switch (nome) {
      case "Luke Skywalker":
        return "https://pt.wikipedia.org/wiki/Luke_Skywalker";
      case "C-3PO":
        return "https://pt.wikipedia.org/wiki/C-3PO";
      case "R2-D2":
        return "https://pt.wikipedia.org/wiki/R2-D2";
      case "Darth Vader":
        return "https://pt.wikipedia.org/wiki/Darth_Vader";
      case "Leia Organa":
        return "https://pt.wikipedia.org/wiki/Leia_Organa";
      case "Owen Lars":
        return "https://en.wikipedia.org/?title=Owen_Lars&redirect=no";
      case "Beru Whitesun lars":
        return "https://nl.wikipedia.org/wiki/Beru_Whitesun_Lars";
      default:
      case "R5-D4":
        return "https://en.wikipedia.org/wiki/Droid_(Star_Wars)";
      case "Biggs Darklighter":
        return "https://es.wikipedia.org/wiki/Biggs_Darklighter";
      case "Obi-Wan Kenobi":
        return "https://pt.wikipedia.org/wiki/Obi-Wan_Kenobi";
        return "não é";
    }
  };

  return (
    <>
      <div className="image"></div>
      <div className="back">
        <h1 className="title">PERSONAGENS</h1>
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
                    <p style={{ margin: 5 }}> Nome: {p.name}</p>
                    <p style={{ margin: 5 }}>Gênero: {p.gender}</p>
                    <p style={{ margin: 5 }}>Nascimento: {p.birth_year}</p>
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

export default Page2;
