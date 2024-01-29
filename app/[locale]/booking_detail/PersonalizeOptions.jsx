import OptionalsList from "./OptionalsList";
import InsuranceList from "./InsuranceList";
import tourData from "../../../dummy_tour_id.json";

const PersonalizeOptions = () => {
  return (
    <>
      {tourData.tour_specials.map((item, index) => {
        return (
          <OptionalsList
            key={index}
            special={item}
            price={tourData.tour_specials_price[index]}
            currency={tourData.price_currency}
          />
        );
      })}
      <InsuranceList />
    </>
  );
};

export default PersonalizeOptions;
