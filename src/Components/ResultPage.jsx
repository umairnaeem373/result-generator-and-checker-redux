import React from "react";
import { useSelector } from "react-redux";

function ResultPage() {
  const State = useSelector((state) => state.result);
  const total = 100;

  console.log(State);
  return (
    <div className="w-full rounded-xl py-6 shadow-xl bg-gray-100 border">
      <h1 className="font-bold text-center text-3xl">Result Page</h1>
      <div className="w-3/4 text-blue-300 mx-auto my-5">
        {State.loading === true ? (
          <h1>Loading...</h1>
        ) : State.loading === false && State.result.length > 0 ? (
          State.result.map(({ id, Name, Last, marks }, i) => {
            return (
              <div key={i}>
                <h1 className="py-1 px-2">
                  Roll no. <span className="font-bold text-black">{id}</span>
                </h1>
                <h1 className="py-1 px-2">
                  Name: <span className="font-bold text-black">{Name}</span>
                </h1>
                <h1 className="py-1 px-2">
                  Last Name:{" "}
                  <span className="font-bold text-black">{Last}</span>
                </h1>

                <div class="relative rounded overflow-x-auto">
                  <table class="w-full text-center text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Subject
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Obtained Marks
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Total
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Grade
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(marks).map(([key, values]) => {
                        return (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {key}
                            </th>
                            <td class="px-6 py-4">{values}</td>
                            <td class="px-6 py-4">100</td>
                            <td class="px-6 py-4">
                              {values > 33 ? "Pass" : "Fail"}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <thead>
                      <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <th scope="col" class="px-6 py-3">
                          Total
                        </th>
                        <th scope="col" class="px-6 py-3">
                          {Object.values(marks).reduce((s, e) => +s + +e)}
                        </th>
                        <th scope="col" class="px-6 py-3">
                          {Object.values(marks).length * 100}
                        </th>
                        <th className={ Object.values(marks).some((e) => +e < 33) ? 'text-red-400' : 'text-green-400' } scope="col" class="px-6 py-3">
                          {Object.values(marks).some((e) => +e < 33)
                            ? "Failed"
                            : "Passed"}
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="font-bold text-center py-4">No Result Found</h1>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
