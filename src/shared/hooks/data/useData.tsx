"use client";

import { useContext } from "react";

import DataContext from "@shared/context/data/DataContext";

export function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used inside a <DataProvider>");
  }

  return context;
}
