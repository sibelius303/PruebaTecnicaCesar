import { useContext } from "react";
import AppContext from "../Contex/AppProvider";


const useApp = () => {
  return useContext(AppContext)
}

export default useApp