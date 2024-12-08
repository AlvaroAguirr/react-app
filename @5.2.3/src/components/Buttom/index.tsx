import { ReactNode } from "react";
import styles from "./Buttom.module.css";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};
console.log(styles);
function Buttoms({ children, isLoading, onClick }: Props) {
  const className = [
    `btn btn-${isLoading ? "Secundary" : "primary"}`,
    styles.button,
  ].join(" ");

  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      type="button"
      //className={[styles.button, styles.padded].join(" ")}
      className={className}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Buttoms;
