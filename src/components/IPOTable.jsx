import React from "react";
import { useNavigate } from "react-router-dom";

const IPOTable = ({ data }) => {
  const navigate = useNavigate();

  const handleIpoClick = (ipo) => {
    navigate(`/ipo/${ipo?.id}`);
  };

  return (
    <div className="relative overflow-x-auto border rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 overflow-hidden rounded-lg">
        <thead className="text-xs text-gray-700 bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Company / Issue Date
            </th>
            <th scope="col" className="px-6 py-3">
              Issue size
            </th>
            <th scope="col" className="px-6 py-3">
              Price range
            </th>
            <th scope="col" className="px-6 py-3">
              Min invest / qty
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ipo) => (
            <tr
              key={ipo?.id}
              className="bg-white border-b last:border-b-0 font-medium cursor-pointer hover:bg-gray-50"
              onClick={() => {
                handleIpoClick(ipo);
              }}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex border border-gray-300">
                    <img
                      src={ipo?.logo}
                      alt="company_logo"
                      className="object-cover w-full self-center"
                    />
                  </div>
                  <div>
                    <p>{ipo?.name}</p>
                    <span className="text-gray-500 text-xs">{`${
                      ipo?.end_date
                        ? ipo?.start_date + " - " + ipo?.end_date
                        : ipo?.start_date
                    }`}</span>
                  </div>
                </div>
              </th>
              <td className="px-6 py-4 text-black">
                ₹{ipo?.issue_size} Crores
              </td>
              <td className="px-6 py-4 text-black">
                ₹{ipo?.price_start}-{ipo?.price_end}
              </td>
              <td className="px-6 py-4 text-black">
                ₹{ipo?.min_investment}
                <div className="text-xs text-gray-500">{`${ipo?.quantity} Shares / ${ipo?.lot} Lots`}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPOTable;
