import { useEffect } from "react";
import Greeting from "../components/Home/Greeting";
import { useAxios } from "../hooks/useAxios";

export default function HomePage() {
  const {
    data: elGuitars,
    getData: getElGuitars,
    loading: loadingElGuitars,
    error: errorElGuitars,
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
