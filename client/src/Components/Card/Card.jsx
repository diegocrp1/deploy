import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { typeData } from "../../utils/validaciones/tiposData";

export default function Card({ id, name, image, Types}) {
  // console.log(Types)
  return (
    <div className={style.containerCards}>
      <Link to={`/detail/${id}`} className={style.link}>
        <h1 className={style.name}>{name}</h1>
        <div className={style.imagenContainer}>
          <img src={image} className={style.image} alt="Not found" />
          {Array.isArray(Types) ? (
            <div>
              <h1>{Types[0].name}</h1>
                <img
                  src={typeData()[Types[0].name]}
                  alt="Not Found"
                  className={style.imgData}
                  />              
            </div>
          ) : (
            <div>
              <h1 className={style.nameType}>{Types}</h1>
              <img
                src={typeData()[Types]}
                className={style.imgData}
                alt="Not Found"
              />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
