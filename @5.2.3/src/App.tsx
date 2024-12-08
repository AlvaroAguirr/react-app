import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Buttom from "./components/Buttoms";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const hangdleClick = () => setIsLoading(!isLoading);
  const list: string[] = ["Goku", "Gohan", "Arturo"];

  const handleSelect = (elemento: string) => {
    console.log("imprmiento", elemento);
  };

  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );

  return (
    <Card>
      <CardBody title="Hola mundo" text="el contenido "></CardBody>
      {contenido}
      <Buttom isLoading={isLoading} onClick={hangdleClick}>
        hola mundo
      </Buttom>
    </Card>
  );
}

export default App;
