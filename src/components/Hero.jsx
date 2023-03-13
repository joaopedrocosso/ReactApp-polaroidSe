import styles from "../style";
import Demonstration from "./Demonstration";

const Hero = () => {
  return (
    <section id="envie sua foto" className={`flex md:flex-row sm:py-6 mt-20`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        {/* Titulo do Hero */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-HeyTinyDEMO text-[32px] ss:text-[54px] mt-8 sm:mt-0 mb-2 sm:mb-0 text-black text-center">
          Transforme qualquer momento em Polaroid
          instantaneamente! <br className="sm:block hidden" />{" "}
          </h1>
        </div>
        {/* Titulo do Hero */}

        {/* Fotos/Apresentação do Hero */}
        <div className="py-0 sm:py-6 mb-16 sm:mb-0">
          <Demonstration/>
        </div>
        {/* Fotos/Apresentação do Hero */}


      </div>

    </section>
  );
};

export default Hero;
