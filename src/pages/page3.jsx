import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

import hope from "../img/Hope.jpg";
import empire from "../img/empire.jpg";
import re from "../img/re.jpg";
import pham from "../img/pham.jpg";
import attack from "../img/attack.jpg";
import revenger from "../img/revenger.jpg";

import LoadingGif from "../img/loading.gif";

const Page3 = () => {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    await axios.get("https://swapi.dev/api/films").then((resp) => {
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
      case "A New Hope":
        return hope;
      case "The Empire Strikes Back":
        return empire;
      case "Return of the Jedi":
        return re;
      case "The Phantom Menace":
        return pham;
      case "Attack of the Clones":
        return attack;
      case "Revenge of the Sith":
        return revenger;

      default:
        return "não é";
    }
  };

  const getLink = (nome) => {
    switch (nome) {
      case "A New Hope":
        return "https://pt.wikipedia.org/wiki/Star_Wars:_Epis%C3%B3dio_IV_%E2%80%93_Uma_Nova_Esperan%C3%A7a";
      case "The Empire Strikes Back":
        return "https://en.wikipedia.org/wiki/The_Empire_Strikes_Back";
      case "Return of the Jedi":
        return "https://en.wikipedia.org/wiki/Return_of_the_Jedi";
      case "The Phantom Menace":
        return "https://en.wikipedia.org/wiki/Star_Wars:_Episode_I_%E2%80%93_The_Phantom_Menace";
      case "Attack of the Clones":
        return "https://pt.wikipedia.org/wiki/Star_Wars:_Epis%C3%B3dio_II_%E2%80%93_Ataque_dos_Clones";
        case "Revenge of the Sith":
        return "https://en.wikipedia.org/wiki/Star_Wars:_Episode_III_%E2%80%93_Revenge_of_the_Sith";
    }
  };

  return (
    <>
      <div className="image"></div>
      <div>
      </div>
      <div className="back">
        <h1 className="title">FILMES</h1>
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
              href={getLink(p.title)}
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
                    src={getImage(p.title)}
                    alt={p.name}
                  />
                  <p style={{ margin: 5 }}>Título: {p.title}</p>
                  <p style={{ margin: 5 }}>Diretor: {p.director}</p>
                  <p style={{ margin: 5 }}>
                    Lançamento: {p.release_date?.replaceAll("-", "/")}
                  </p>
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

export default Page3;
