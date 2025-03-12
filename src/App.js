import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const fetchURL = await fetch("https://fakestoreapi.com/carts/2");
        const response = await fetchURL.json();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  console.log("....", data);

  return (
    <>
      <p> FETCH DATA</p>

      {data?.products?.map((el, index) => (
        <ul>
          <li>{el.productId}</li>
        </ul>
      ))}
    </>
  );
}
