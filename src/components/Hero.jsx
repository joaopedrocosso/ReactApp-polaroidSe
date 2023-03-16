import styles from "../style";
import Demonstration from "./Demonstration";
import { useTranslation } from "react-i18next";
import '../i18n/index';

const Hero = () => {

  const { t } = useTranslation();

  return (
    <section id="envie sua foto" className={`flex md:flex-row sm:py-6 mt-20`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        {/* Titulo do Hero */}
        <div className="flex flex-row justify-between items-center w-full">
 
          <h1 className="flex-1 font-HeyTinyDEMO sm:font-HeyTinyDEMO text-[32px] ss:text-[52px] mt-8 sm:mt-0 mb-2 sm:mb-0 text-black text-center">
          {t("heroTitle")}<br className="sm:block hidden" />{" "}
          </h1>
        </div>

        {/* Apresentação do Hero */}
        <div className="py-0 sm:py-6 mb-16 sm:mb-0">
          <Demonstration/>
        </div>

      </div>
    </section>
  );
};

export default Hero;
