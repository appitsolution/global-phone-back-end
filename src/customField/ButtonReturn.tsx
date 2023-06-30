import axios from "axios";
import React, { useEffect, useState } from "react";

const server_url = "https://global-phone.onrender.com";

const ButtonReturn = () => {
  const [returnStatus, setReturnStatus] = useState(false);
  const url = document.baseURI;
  const id = url.match(/\/([^/]+)$/)[1];

  const getIdOrder = async () => {
    console.log(id);

    const dataOrder = await axios.get(`${server_url}/api/orders-user/${id}`, {
      params: {
        fields: "returnStatus",
      },
    });
    if (dataOrder.data.returnStatus === "True") {
      setReturnStatus(true);
    } else {
      setReturnStatus(false);
    }

    console.log(dataOrder.data);
  };

  const funTest = async (e) => {
    console.log("ok");
    e.preventDefault();
    const url = document.baseURI;
    const id = url.match(/\/([^/]+)$/)[1];
    const result = await axios.post(`${server_url}/order/update-return/${id}`);
    console.log(result.data);

    if (result.data.status === "ok") {
      setReturnStatus(true);
    }
  };

  useEffect(() => {
    getIdOrder();
  }, []);

  return (
    <>
      <button
        onClick={funTest}
        type="button"
        style={{
          backgroundColor: returnStatus ? "rgb(175,76,116)" : "#4CAF50",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
        }}
        disabled={returnStatus}
      >
        {returnStatus ? "Товар повернули" : "Повернути"}
      </button>
    </>
  );
};

export default ButtonReturn;
