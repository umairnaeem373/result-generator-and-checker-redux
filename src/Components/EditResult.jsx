import React from "react";
import { loadData } from "../Actioms/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function EditResult() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const data = useSelector((state) => state.createData);

  React.useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Edit Result</h1>
      <div>
        {data.loading === true ? (
          <h1>Loading...</h1>
        ) : data.loading === false && data.students.length > 1 ? (
          <div class="relative my-5 overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Roll no.
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Last Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Marks
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {data?.students?.map(({Name , Last , marks , id}, index) => {
                return (
                  <tbody key={index}>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {id}
                      </th>
                      <td class="px-6 py-4">{Name}</td>
                      <td class="px-6 py-4">{Last}</td>
                      <td class="px-6 py-4">
                        {Object.values(marks).reduce(
                          (prev, current) => +prev + +current
                        )}
                      </td>
                      <td class="px-6 py-4">
                        <button
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => navigate(`/editpage/${id}`)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        ) : (
          <h1>No Results</h1>
        )}
      </div>
    </div>
  );
}

export default EditResult;
