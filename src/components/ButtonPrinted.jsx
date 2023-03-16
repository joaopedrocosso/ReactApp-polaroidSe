import HeroActionButtons from "./HeroActionButtons";

const ButtonPrinted = () =>  (
  <section id="button">
    <div className="flex flex-col items-center py-2">
      <HeroActionButtons styles={`mt-10`} />
    </div>
  </section>
);

export default ButtonPrinted;
