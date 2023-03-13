import { arrow, inputPicture, outputPicture } from "../assets";
import { layout } from "../style";

const Demonstration = () => (
  <section id="product" className="flex flex-row py-0">
    <div className={layout.sectionImgReverse}>
      <img src={inputPicture} alt="inputPicture" className="w-[136.34px] sm:w-[207.34px] h-[250.81px] sm:h-[309.81px] object-contain ml-0 sm:ml-80" />

    </div>
    <div className={layout.sectionImgReverse}>
      <img src={arrow} alt="arrow" className="w-[250px] sm:w-[313px] h-[188.52px] sm:h-[188.52px] object-contain mr-2 sm:mr-0 ml-0 sm:ml-6" />

    </div>
    <div className={layout.sectionImgReverse}>
      <img src={outputPicture} alt="outputPicture" className="rotate-5 shadow-2xl w-[136.34px] sm:w-[207.34px] h-[230.81px] sm:h-[309.81px] object-contain mr-0 sm:mr-48" />

    </div>
  </section>
);

export default Demonstration;