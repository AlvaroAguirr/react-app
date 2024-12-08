import { ReactNode } from "react";
import "./Buttom.css";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

function Buttoms({ children, isLoading, onClick }: Props) {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      type="button"
      className={`btn btn-${isLoading ? "Secundary" : "primary"}`}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Buttoms;
