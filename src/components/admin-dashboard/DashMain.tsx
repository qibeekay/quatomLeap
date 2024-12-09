import React from "react";
import AdminNav from "../externalComponents/AdminNav";

const DashMain = () => {
  return (
    <div className="bg-[#f9f9f9] py-4 px-[3rem] w-[calc(100%-260px)] absolute right-0">
      <AdminNav />
      <div>
        <h1 className="text-[24px] text-[#211B1B] font-semibold">Blog posts</h1>
        <p>Here is a list of all published blog pots</p>

        <div className="w-full mt-10">
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-[#F0F2F5] ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name and Email Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date Created
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashMain;
