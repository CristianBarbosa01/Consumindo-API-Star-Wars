import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

import corv from "../img/corv.png";
import star from "../img/star.png";
import lan from "../img/lan.jpg";
import death from "../img/death.png";
import mil from "../img/mil.jpg";
import wing from "../img/wing.jpg";
import xwing from "../img/xwing.jpg";
import tie from "../img/tie.png";
import exe from "../img/exe.png";
import re from "../img/re.png";

import LoadingGif from "../img/loading.gif";

const Page5 = () => {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    await axios.get("https://swapi.dev/api/starships").then((resp) => {
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
      case "CR90 corvette":
        return corv;
      case "Star Destroyer":
        return star;
      case "Sentinel-class landing craft":
        return lan;
      case "Death Star":
        return death;
      case "Millennium Falcon":
        return mil;
      case "Y-wing":
        return wing;
      case "X-wing":
        return xwing;
      case "TIE Advanced x1":
        return tie;
      case "Executor":
        return exe;
      case "Rebel transport":
        return re;
      // default:
      //   return "não é";
    }
  };

  const getLink = (nome) => {
    switch (nome) {
      case "CR90 corvette":
        return "https://starwars.fandom.com/wiki/CR90_corvette";
      case "Star Destroyer":
        return "https://en.wikipedia.org/wiki/Star_Destroyer";
      case "Sentinel-class landing craft":
        return "https://starwars.fandom.com/wiki/Landing_craft/Legends";
      case "Death Star":
        return "https://en.wikipedia.org/wiki/Death_Star";
      case "Millennium Falcon":
        return "https://en.wikipedia.org/wiki/Millennium_Falcon";
      case "Y-wing":
        return "https://en.wikipedia.org/wiki/Y-wing";
      case "X-wing":
        return "https://en.wikipedia.org/wiki/X-wing_fighter";
      case "TIE Advanced x1":
        return "https://starwars.fandom.com/wiki/TIE_Advanced_x1";
      case "Executor":
        return "https://starwars.fandom.com/wiki/Executor";
      case "Rebel transport":
        return "https://starwars.fandom.com/wiki/GR-75_medium_transport";
    }
  };

  return (
    <>
      <div className="back">
        <h1 className="title">NAVES</h1>
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
                  width: 300,
                  height: 450,
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
                  <p style={{ margin: 5 }}>Capacidade: {p.cargo_capacity}</p>
                  <p style={{ margin: 5 }}>Valor: {p.cost_in_credits}</p>
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

export default Page5;
