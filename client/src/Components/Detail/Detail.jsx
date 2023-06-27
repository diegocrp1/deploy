import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterDetail, resetCharacterDetail } from "../../Redux/Actions";
import style from "./Detail.module.css";
import charizar from "../../utils/charizar.gif";
import ProgressBar from "../ProgressBar/ProgressBar";
import { typeData } from "../../utils/validaciones/tiposData";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { characterDetail } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setLoading(true);
      await dispatch(getCharacterDetail(id));

      if (mounted) {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
      dispatch(resetCharacterDetail());
    };
  }, [dispatch, id]);


  if (loading) {
    return (
      <div className={style.containerLoading}>
        <img src={charizar} alt="Not Found" className={style.containerImg} />
        <span className={style.containerText}>Loading...</span>
      </div>
    );
  }
  return (
    <div className={style.container}>
      <div className={style.containerDetail}>
        <div>
          <div className={style.text}>
            <h1>{characterDetail.name}</h1>
            {typeof characterDetail.id === "number" ? (
              <h1>Pokedex N° {characterDetail.id}</h1>
            ) : (
              <div className={style.dataBase}>
                <span>Pokedex N°</span>
                <h1>{characterDetail.id}</h1>
              </div>
            )}
          </div>
          <img
            src={characterDetail.image}
            alt={characterDetail.name}
            className={style.image}
          />
        </div>

        <div>
        {Array.isArray(characterDetail.Types) ? (
            <div>
              {
                characterDetail.Types.length>1?
                <div >
                <h1>{characterDetail.Types[0]}</h1>
                <h1>{characterDetail.Types[1]}</h1>
                </div>
                :
                <h1>{characterDetail.Types[0]}</h1>
              }
                <img
                  src={typeData()[characterDetail.Types[0]]}
                  alt="Not Found"
                  className={style.imgData}
                />
                {/* {console.log(typeData()[characterDetail.Types[0]])} */}
            </div>
          ) : (
            <div>
              <h1 className={style.nameType}>{characterDetail.Types}</h1>
              <img
                src={typeData()[characterDetail.Types]}
                className={style.imgData}
                alt="Not Found"
              />
            </div>
          )}
        </div>
      </div>

      <div className={style.progressBar}>
        <h1 className={style.detail}>Detail</h1>
        <div>
          <span className={style.progressBarText}>Life</span>
          <ProgressBar
            characterDetail={characterDetail}
            value={characterDetail.life}
          />
        </div>
        <div>
          <span className={style.progressBarText}>Attack</span>
          <ProgressBar
            characterDetail={characterDetail}
            value={characterDetail.attack}
          />
        </div>
        <div>
          <span className={style.progressBarText}>Defense</span>
          <ProgressBar
            characterDetail={characterDetail}
            value={characterDetail.defense}
          />
        </div>
      </div>
    </div>
  );
}
