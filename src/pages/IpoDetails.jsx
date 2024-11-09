import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import IPOStatusDesktop from "../components/IPOStatusDesktop";
import IPOStatusMobile from "../components/IPOStatusMobile";

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const IpoDetails = ({ IPOData }) => {
  const param = useParams();
  const ipoId = Number(param?.ipoId);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    if (typeof window !== "undefined") {
      checkMobile();
    }

    // Debounced resize event listener
    const debouncedCheckMobile = debounce(checkMobile, 200); // 200ms debounce

    window.addEventListener("resize", debouncedCheckMobile);

    return () => window.removeEventListener("resize", debouncedCheckMobile);
  }, []);

  const ipoData = IPOData.filter((ipo) => ipo.id === ipoId)[0];

  const handleDownloadClick = () => {
    console.log("Download click!");
  };

  const handleApplyNowClick = () => {
    console.log("Apply now click!");
  };

  return (
    <div className="m-5">
      <div>{ipoData.name}</div>
      <div className="mb-8 text-gray-500">
        <Link to="/">
          <span className="mr-2">Home</span>
        </Link>{" "}
        &gt; <span className="ml-2">Market watch</span>
      </div>
      <div className="my-6 flex gap-6 items-center">
        <Link to={"/"}>
          <div className="border border-gray-300 p-3 rounded-lg w-10 h-10">
            <img
              src="https://d10b7kv2y188ox.cloudfront.net/react/arrow.svg"
              className="w-full h-full"
            />
          </div>
        </Link>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300 flex">
              <img
                src={ipoData?.logo}
                alt="company_logo"
                className="object-cover w-full self-center"
              />
            </div>
            <div className="flex justify-center flex-col">
              <h3 className="text-2xl font-bold">{ipoData?.name}</h3>
              <span className="text-gray-500 text-sm">{ipoData?.fullname}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="w-10 h-10 cursor-pointer"
              onClick={() => handleDownloadClick()}
            >
              <img
                src="https://d10b7kv2y188ox.cloudfront.net/react/document-download.svg"
                alt=""
                className="w-full"
              />
            </div>
            {!isMobile && (
              <div
                className="py-3 px-12 bg-[#191442] rounded-xl text-white cursor-pointer ml-5"
                onClick={() => handleApplyNowClick()}
              >
                Apply now
              </div>
            )}
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="py-3 px-12 bg-[#191442] rounded-xl text-white text-center cursor-pointer mb-5">
          Apply now
        </div>
      )}
      <div className="border border-gray-300 p-5 mb-5 rounded-lg">
        <h3 className="mb-5 font-semibold text-lg">IPO Details</h3>
        <div className="grid md:grid-cols-4 gap-5 border border-gray-300 p-5 rounded-lg grid-cols-2">
          {Object.entries(ipoData?.ipo_details).map(([key, value], idx) => (
            <div key={idx}>
              <p className="text-gray-500 mb-1 capitalize">
                {key.replace(/_/g, " ")}
              </p>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-gray-300 p-5 mb-5 rounded-lg">
        <h3 className="mb-5 font-semibold text-lg">IPO Timeline</h3>
        <div className="flex">
          {!isMobile ? (
            <IPOStatusDesktop ipoData={ipoData} />
          ) : (
            <IPOStatusMobile ipoData={ipoData} />
          )}
        </div>
      </div>
      <div className="border border-gray-300 py-3 p-6 rounded-lg">
        <h3 className="mb-5 font-semibold text-lg">About the company</h3>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
          sequi repellat. Itaque, quam beatae est error mollitia ducimus
          doloribus optio perferendis laborum sunt eius minus laboriosam magnam
          nostrum ut maiores corrupti quidem labore facere enim nam? Consequatur
          esse tempore tenetur obcaecati nesciunt deleniti odio perspiciatis
          ullam quidem sunt provident totam vero officiis aut nulla eveniet
          culpa, assumenda unde, doloremque atque perferendis mollitia velit
          ratione quia! Earum quia quasi ex eius ut. Quaerat, recusandae omnis
          aperiam consectetur laboriosam sint ullam tenetur iusto asperiores,
          esse enim commodi! Dolores consequatur, maiores reiciendis provident
          temporibus earum laboriosam nihil excepturi nemo exercitationem
          tempora pariatur assumenda.
        </p>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          ratione voluptatum eligendi quidem? Nam, hic minus tempore debitis
          saepe error eveniet quam neque architecto similique fugiat earum
          asperiores repudiandae magni odit rem. Aspernatur sint error
          voluptatem reiciendis magnam autem similique sequi earum. Illo
          distinctio magnam maxime laborum asperiores similique doloremque ipsum
          iure nihil ea cum, ad, blanditiis dolorem perspiciatis eaque atque
          earum odit. Consequatur est itaque quae voluptatibus vero cupiditate.
        </p>
      </div>
    </div>
  );
};

export default IpoDetails;
