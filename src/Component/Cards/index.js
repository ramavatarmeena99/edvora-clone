import React from "react";
import Style from "./index.module.css";
export default function Cards({ item }) {
  return (
    <div className={Style.cards}>
      <div
        style={{
          width: "90%",
          height: "198px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#171717",
        }}
      >
        <div className={Style.image}>
          <img alt={item.map_url} src={item.map_url} />
        </div>
        <div
          style={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#171717",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#171717",
              padding: "0px 30px",
            }}
          >
            <div className={Style.dataFromApi}>
              <p>Ride Id:{item.id}</p>
            </div>
            <div className={Style.dataFromApi}>
              <p>Origin Station : {item.origin_station_code}</p>
            </div>
            <div className={Style.dataFromApi}>
              <p>station_path : {item.station_path}</p>
            </div>
            <div className={Style.dataFromApi}>
              <p>Date : {item.date}</p>
            </div>
            <div className={Style.dataFromApi}></div>
          </div>
        </div>
        <div
          style={{
            width: "20%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "auto",
              height: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
          >
            <div className={Style.locationInIndia}>
              <p>{item.city}</p>
            </div>
            <div className={Style.locationInIndia}>
              <p>{item.state}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
