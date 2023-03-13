import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const ButtonPrinted = () =>  (
  <section id="button">
    <div className="flex flex-col items-center py-2">
      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default ButtonPrinted;
