import { useContext } from "react";
import QuioscoContext from "../context/QuioscoContext";

const useQuiosco = () => {
    return useContext(QuioscoContext);
}

export default useQuiosco;