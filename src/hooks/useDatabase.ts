import { useContext } from "react";
import { DatabaseContext } from "../contexts/DatabaseContext";

export function useDatabase() {
  return useContext(DatabaseContext)
}