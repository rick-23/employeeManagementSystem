import React, { useEffect, useState } from "react";
// import HomePage from "../components/HomePage";

const HomePageContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data or perform any initialization logic
    // For example, fetch data from an API
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from an API
      const response = await fetch("api/home");
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //   return <HomePage data={data} />;
};

export default HomePageContainer;
