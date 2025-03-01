import { useState } from "react";
import { SortConfig } from "../vehicles/vehicles.types";

export function useSort<T>(items: T[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({
    key: null,
    direction: null,
  });

  const sortedItems = [...items].sort((a, b) => {
    if (!sortConfig.key || !sortConfig.direction) return 0;

    const key = sortConfig.key;
    if (sortConfig.direction === "asc") return a[key] > b[key] ? 1 : -1;
    if (sortConfig.direction === "desc") return a[key] < b[key] ? 1 : -1;

    return 0;
  });

  const handleSort = (key: keyof T) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        if (prev.direction === "asc") return { key, direction: "desc" };
        if (prev.direction === "desc") return { key: null, direction: null };
      }
      return { key, direction: "asc" };
    });
  };

  return { sortedItems, handleSort, sortConfig };
}
