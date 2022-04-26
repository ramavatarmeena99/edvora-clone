import React, { useState } from "react";
import Cards from "../Cards";
import Style from "./index.module.css";
export default function Tabs({ apiUserData }) {
  const data = [
    { id: 1, name: "Nearest rides" },
    { id: 2, name: "Upcoming rides" },
    { id: 3, name: "Past rides" },
  ];
  const tabIndex = parseInt(localStorage.getItem("tabIndex"));

  const [selectedId, setSelectedId] = useState(tabIndex || 1);

  const tabHandler = (item) => {
    setSelectedId(item.id);
    localStorage.setItem("tabIndex", item.id);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        backgroundColor: "#333333",
        paddingTop: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: "18px",
          fontWeight: "700",
          color: "#E5E5E5",
        }}
      >
        {data.map((item, index) => {
          const isActiveTab = selectedId === item.id;

          return (
            <div
              className={Style.tabs}
              onClick={() => tabHandler(item)}
              key={index}
              style={isActiveTab ? activeCss : {}}
            >
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div>
        {selectedId === 1 && (
          <>
            {apiUserData?.map((item, inde) => {
              return <Cards item={item} />;
            })}
          </>
        )}
        {selectedId === 2 && (
          <h2
            style={{
              textAlign: "center",
              paddingTop: "20%",
            }}
          >
            Upcoming rides
          </h2>
        )}

        {selectedId === 3 && (
          <h2
            style={{
              textAlign: "center",
              paddingTop: "20%",
            }}
          >
            Past rides
          </h2>
        )}
      </div>
    </div>
  );
}
let activeCss = {
  display: "flex",
  color: "white",
  fontWeight: "700",
  fontSize: "18px",
  borderBottom: "2px solid white",
};
