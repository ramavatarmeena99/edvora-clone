import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import Tabs from "../Component/Tabs";

export default function Home() {
  const [apiUserData, setApiUserData] = useState();
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://assessment.api.vweb.app/rides`,
    })
      .then((res) => {
        setApiUserData(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <Header apiUserData={apiUserData} />
      <Tabs apiUserData={apiUserData} />
    </>
  );
}
