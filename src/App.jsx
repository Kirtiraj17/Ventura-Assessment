// import { useState } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IpoDetails from "./pages/IpoDetails";
import GoAirLogo from "./assets/goair.png";
import OyoLogo from "./assets/oyo_logo.svg";

function App() {
  const IPOData = [
    {
      id: 1,
      logo: GoAirLogo,
      name: "GO AIR",
      fullname: "Go Air Private Limited",
      start_date: "2022-10-04",
      end_date: "2022-10-07",
      price_start: 50,
      price_end: 60,
      issue_size: 3600,
      quantity: 100,
      lot: 5,
      min_investment: 50000,
      ipo_details: {
        issue_size: "₹3,600 - ₹3,700 Cr.",
        price_range: "₹100-200",
        minimum_amount: "₹50,000",
        lot_size: "150 shares/lots",
        issue_dates: "12 - 15 Dec 22",
        listed_on: "15 Dec 22",
        listed_price: "₹150",
        listing_gains: "₹10(10.0%)"
      },
      status: {
        bidding_starts: "12 Dec 2023",
        bidding_ends: "15 Dec 2023",
        allotment_finalization: "18 Dec 2023",
        refund_initiation: "18 Dec 2023",
        demat_transfer: "18 Dec 2023",
        listing_date: "21 Dec 2023",
      }
    },
    {
      id: 2,
      logo: "https://www.bajajenergy.com/bajajenergy_assets/s3fs-public/images/Bajaj%20Energy_300x118_Png.png",
      name: "BAJAJ ENERGY",
      fullname: "Bajaj Energy Private Limited",
      start_date: "2022-10-04",
      end_date: "2022-10-07",
      price_start: 100,
      price_end: 120,
      issue_size: 5300,
      quantity: 150,
      lot: 1,
      min_investment: 15000,
      ipo_details: {
        issue_size: "₹3,600 - ₹3,700 Cr.",
        price_range: "₹100-200",
        minimum_amount: "₹50,000",
        lot_size: "150 shares/lots",
        issue_dates: "12 - 15 Dec 22",
        listed_on: "15 Dec 22",
        listed_price: "₹150",
        listing_gains: "₹10(10.0%)"
      },
      status: {
        bidding_starts: "12 Dec 2023",
        bidding_ends: "15 Dec 2023",
        allotment_finalization: "18 Dec 2023",
        refund_initiation: "18 Dec 2023",
        demat_transfer: "18 Dec 2023",
        listing_date: "21 Dec 2023",
      }
    },
    {
      id: 3,
      logo: OyoLogo,
      name: "OYO",
      fullname: "OYO Private Limited",
      start_date: "To be announced",
      end_date: "",
      price_start: 50,
      price_end: 60,
      issue_size: 3600,
      quantity: 100,
      lot: 5,
      min_investment: 50000,
      ipo_details: {
        issue_size: "₹3,600 - ₹3,700 Cr.",
        price_range: "₹100-200",
        minimum_amount: "₹50,000",
        lot_size: "150 shares/lots",
        issue_dates: "12 - 15 Dec 22",
        listed_on: "15 Dec 22",
        listed_price: "₹150",
        listing_gains: "₹10(10.0%)"
      },
      status: {
        bidding_starts: "12 Dec 2023",
        bidding_ends: "15 Dec 2023",
        allotment_finalization: "18 Dec 2023",
        refund_initiation: "18 Dec 2023",
        demat_transfer: "18 Dec 2023",
        listing_date: "21 Dec 2023",
      }
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home IPOData={IPOData} />} />
        <Route path="/ipo/:ipoId" element={<IpoDetails IPOData={IPOData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
