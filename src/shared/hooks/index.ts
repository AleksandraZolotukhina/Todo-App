import { useContext } from "react";
import { StoreContext } from "../store";

export const useStore = () => {
  const store = useContext(StoreContext);

  return store
};
