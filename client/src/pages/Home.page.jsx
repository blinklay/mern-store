import { useEffect } from "react";
import Greeting from "../components/Home/Greeting";
import { useAxios } from "../hooks/useAxios";
import useHelmet from "../hooks/useHelmet";
import Slider from "../components/Slider/Slider";
import { Link } from "react-router-dom";
import Loader from "../components/Catalog/Loader";
import DeliverySteps from "../components/DeliverySteps/DeliverySteps";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import PromoSection from "../components/PromoSection/PromoSection";

export default function HomePage() {
  useHelmet("Главная");

  const {
    data: elGuitars,
    getData: getElGuitars,
    loading: loadingElGuitars,
    // error: errorElGuitars,
  } = useAxios();

  const {
    data: brandGuitars,
    getData: getBrandGuitars,
    loading: loadingBrandGuitars,
    // error: errorBrandGuitars,
  } = useAxios();

  useEffect(() => {
    getElGuitars("/products/?brand=null&category=Электрогитары");
    getBrandGuitars("/products/?brand=Ibanez&category=null");
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <Greeting />

      <div className="flex flex-col gap-4">
        {loadingElGuitars && <Loader />}
        {!loadingElGuitars && (
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-medium">Электрогитары</h3>
            <div>{elGuitars && <Slider items={elGuitars.products} />}</div>
          </div>
        )}

        {loadingBrandGuitars && <Loader />}
        {!loadingBrandGuitars && (
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-medium">Гитары Ibanez</h3>
            <div>
              {brandGuitars && <Slider items={brandGuitars.products} />}
            </div>
          </div>
        )}
      </div>

      <DeliverySteps />
      <PromoSection />
      <SubscribeForm />
    </div>
  );
}
