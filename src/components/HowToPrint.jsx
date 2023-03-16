import { mini, square, wide } from "../assets";
import styles, { layout } from "../style";
import { useTranslation } from "react-i18next";

const HowToPrint = () => {

  const { t } = useTranslation();

  return(  
  <section id="como imprimir" className="py-12">
  <div className="flex flex-col justify-between items-left w-full">    

    <div>

      <h1 className="flex-1 font-HeyTinyDEMO ss:text-[34px] text-[32px] text-black text-center mx-12">
        1. {t("measures")} <br className="sm:block hidden" />{" "}
      </h1>

      <section id="product" className="flex flex-col sm:flex-row mb-8 ">
        <div className={layout.sectionImgReverse}>
          <img src={mini} alt="mini" className="w-[160.19px] sm:w-[205.19px] sm:h-[392.04] ml-0 sm:ml-72 object-contain " />

        </div>
          <div className={layout.sectionImgReverse}>
          <img src={square} alt="square" className="w-[208.19px] sm:w-[254.19px] sm:h-[392.04] object-contain " />
        </div>

        <div className={layout.sectionImgReverse}>
          <img src={wide} alt="wide" className="w-[295.19px] sm:w-[340.19px] sm:h-[392.04] mr-0 sm:mr-48 object-contain " />
        </div>
      </section>

    </div>

    <div>

      <h1 className="flex-1 font-HeyTinyDEMO ss:text-[34px] text-[32px] text-black text-center mt-12 mx-12">
        2. {t("material")} <br className="sm:block hidden" />{" "}
      </h1>

      <p className={`${styles.paragraph} mx-20 mt-1.2 text-[14px] sm:text-[16px] text-black text-center`}>
        {t("materialText")} 
      </p>     
      
    </div>

  </div>
</section>)

};

export default HowToPrint;
