import { useEffect } from "react";
import Greeting from "../components/Home/Greeting";
import { useAxios } from "../hooks/useAxios";
import useHelmet from "../hooks/useHelmet";
import Slider from "../components/Slider/Slider";
import { Link } from "react-router-dom";

export default function HomePage() {
  useHelmet("Главная");

  const {
    data: elGuitars,
    getData: getElGuitars,
    // loading: loadingElGuitars,
    // error: errorElGuitars,
  } = useAxios();

  const {
    data: brandGuitars,
    getData: getBrandGuitars,
    // loading: loadingBrandGuitars,
    // error: errorBrandGuitars,
  } = useAxios();

  useEffect(() => {
    getElGuitars("/products/?brand=null&category=Электрогитары");
    getBrandGuitars("/products/?brand=Ibanez&category=null");
  }, []);

  console.log(brandGuitars);

  return (
    <div>
      <Greeting />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Электрогитары</h3>
          <div>{elGuitars && <Slider items={elGuitars.products} />}</div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Гитары Ibanez</h3>
          <div>{brandGuitars && <Slider items={brandGuitars.products} />}</div>
        </div>
      </div>
    </div>
  );
}
