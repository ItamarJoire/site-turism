import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

export function useLocation() {
  const value = useContext(LocationContext)
  return value
}