import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Buttom from "./components/Buttom";
import { useState } from "react";

function App() {
  const [lista, setLista] = useState(["Goku", "Gohan", "Arturo"]);

  // const [isLoading, setIsLoading] = useState(false);
  // const hangdleClick = () => setIsLoading(!isLoading);
  // const list: string[] = ["Goku", "Gohan", "Arturo"];

  // const handleSelect = (elemento: string) => {
  //   console.log("imprmiento", elemento);
  // };

  // const contenido = list.length !== 0 && (
  //   <List data={list} onSelect={handleSelect} />
  // );

  // return (
  //   <Card>

  //     <CardBody title="Hola mundo" text="el contenido "></CardBody>
  //     {contenido}
  //     <Buttom isLoading={isLoading} onClick={hangdleClick}>
  //       Pulsame
  //     </Buttom>
  //   </Card>
  // );
  const addMinion = () => setLista([...lista, "Minion"]);
  const DeleteMinion = () => setLista(lista.slice(0, -1));
  return (
    <Card>
      <Buttom onClick={addMinion}>Añadir </Buttom>
      <Buttom onClick={DeleteMinion}>Quitar </Buttom>
      <List data={lista}></List>
    </Card>
  );
}

export default App;
