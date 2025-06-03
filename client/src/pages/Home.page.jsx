import { useEffect } from "react";
import Greeting from "../components/Home/Greeting";
import { useAxios } from "../hooks/useAxios";
import useHelmet from "../hooks/useHelmet";

export default function HomePage() {
  useHelmet("Главная");

  const {
    data: elGuitars,
    getData: getElGuitars,
    // loading: loadingElGuitars,
    // error: errorElGuitars,
  } = useAxios();

  useEffect(() => {
    getElGuitars("/products/?brand=null&category=Электрогитары");
  }, []);

  console.log(elGuitars);

  return (
    <div>
      <Greeting />
    </div>
  );
}
