import React from "react";
import IPOTable from "../components/IPOTable";

const Home = ({ IPOData }) => {

  return (
    <div className="m-5">
      <h1>Ventura Assessment</h1>
      <div className="">
        <h2 className="mb-5">IPO Listing Page</h2>
        <IPOTable data={IPOData} />
      </div>
    </div>
  );
};

export default Home;
