import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};
const style = {
  backgroundColor: "red",
};

function Buttoms({ children, isLoading, onClick }: Props) {
  return (
    <button
      style={style}
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
