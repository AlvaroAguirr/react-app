import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  //hock la funcion de usestate, modificar variables de componentes funcionnales
  const [index, setIndex] = useState(1);
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    //si onselect esta definido ejecutas
    onSelect?.(elemento);
  };

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
