import React from "react";

function Table({ createTable, currentNode }) {
  return (
    <div className={createTable ? "d-block mt-4" : "d-none"}>
      <h3>Created table</h3>
      <table>
        {[...Array(currentNode[0] + 1)].map((el, index) => (
          <tr key={index}>
            {[...Array(currentNode[0] + 1)].map((el1, i1) => (
              <td>
                <input />
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
