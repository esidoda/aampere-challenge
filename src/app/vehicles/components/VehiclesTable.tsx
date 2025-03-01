import React, { useState } from "react";
import { Vehicle, VehicleTableColumn } from "../vehicles.types";
import { useSort } from "../../hooks/useSort";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

interface TableProps {
  columns: VehicleTableColumn[];
  data: Vehicle[];
  detailsLink: (id: number) => void;
}

const VehicleTable = ({ columns, data, detailsLink }: TableProps) => {
  const { sortedItems, handleSort, sortConfig } = useSort<Vehicle>(data);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="bg-gray-100">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-4 py-2 text-left ${
                  column.isSortable ? "cursor-pointer" : ""
                }`}
                onClick={() =>
                  column.isSortable && handleSort(column.propertyKey)
                }
              >
                <span className="flex items-center gap-x-2">
                  <span>{column.header}</span>

                  {column.isSortable &&
                    (sortConfig.key === column.propertyKey ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="mt-1" />
                      ) : (
                        <FaSortDown className="mb-1" />
                      )
                    ) : (
                      <FaSort />
                    ))}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => detailsLink(row.id)}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2">
                  {row[column.propertyKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default VehicleTable;
