import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";
import { Link } from 'react-scroll'
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

  return(
  <section className={`${styles.flexCenter} py-10 flex-col md:ml-12 xl:ml-6`}>

  <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

    {/* Logo e Slogan */}
    <div className="flex-[1] px-6 flex flex-col mr-0 sm:mr-10">
      <img src={logo} alt="polaroidse" className="content-center ml-8 sm:ml-0 mr-0 sm:mr-80 d-[186px] h-[48px] object-contain"/>

      <p className={`${styles.paragraph} ml-8 mt-1.2 text-center sm:text-left max-w-[326px] text-[16px] text-black`}>
        {t("footerText")}
      </p>
    </div>
    
    {/* Footer Links */}
    <div className="flex-[1.5] w-full flex flex-row justify-around flex-wrap md:mt-0 mt-8">
      {footerLinks.map((footerlink) => (
        <div key={footerlink.title} className={`flex flex-col ss:my-2 my-4 min-w-[150px]`}>            
          <h4 className="font-poppins text-center sm:text-left font-medium text-[18px] leading-[27px] text-black">
            {t(footerlink.title)}
          </h4>

          <ul className="list-none text-center sm:text-left mt-4">
            {footerlink.links.map((link, index) => {
              const targetId = link.link.split('#')[1];
              const isSmoothScroll = targetId !== undefined;
              return (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimBlack hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {isSmoothScroll ? (
                    <Link to="como imprimir" smooth={true} duration={500} offset={-100}>
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.link} target="_blank">{link.name}</a>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  </div>
  
  {/* Copyright */}
  <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
    <p className="font-poppins font-normal text-center text-[15px] leading-[27px] text-black">
      Copyright Ⓒ 2023 Polaroid-Se. {t("copyright")}
    </p>
  </div>

</section>)
  
};

export default Footer;
