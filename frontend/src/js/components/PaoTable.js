import React from 'react';

const PaoTable = () => {
  return (
    <div className="rounded mt-10">
      <div className="flex justify-center">
        <table className="table-auto rounded">
          <thead>
            <tr className="Trrr text-center text-white lg:text-gray-700 text-xl lg:text-6xl">
              <th className="pl-10 lg:w-32 py-4 lg:px-20 rounded-tl"></th>
              <th className="w-30pec lg:w-32 py-4 lg:px-20">P</th>
              <th className="w-30pec lg:w-32 py-4 lg:px-20">A</th>
              <th className="w-30pec lg:w-32 py-4 lg:px-20 rounded-tr">O</th>
            </tr>
          </thead>
          <tbody className="text-2xl lg:text-3xl font-light border-b text-center"> 
            <tr className="bg-white">
              <td className="py-5">00</td>
              <td className="py-5">Alex</td>
              <td className="">Threw</td>
              <td className="">Bread</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-5">01</td>
              <td className="py-5">Alex</td>
              <td className="">Threw</td>
              <td className="">Bread</td>
            </tr>
            <tr className="bg-white">
              <td className="py-5">00</td>
              <td className="py-5">Alex</td>
              <td className="">Threw</td>
              <td className="">Bread</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-5">01</td>
              <td className="py-5">Alex</td>
              <td className="">Threw</td>
              <td className="">Bread</td>
            </tr>
            <tr className="bg-white">
              <td className="py-5">00</td>
              <td className="py-5">Alex</td>
              <td className="">Threw</td>
              <td className="">Bread</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-5">01</td>
              <td className="py-5">Alex</td>
              <td className="">Threw</td>
              <td className="">Bread</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaoTable;