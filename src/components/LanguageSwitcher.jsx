import { useTranslation } from "react-i18next";
import { us, es, br } from "../assets";


const languageOptions = [
    {
        name: "",
        value: "en",
        flag: us,
    },
    {
        name: "",
        value: "ptBR",
        flag: br
    },
    {
        name: "",
        value: "es",
        flag: es,
    },
]

export const LanguageSwitcher = () => {

    const { t, i18n } = useTranslation();

    return(
        <div className="language-switcher flex content-center space-x-2 mr-6">        
            {languageOptions.map(languageOption => (
                <button
                   key={languageOption.value}
                   onClick={() => {
                    i18n.changeLanguage(languageOption.value);
                   }} 
                   className="bg-none cursor-pointer border-none"
                >
                    <img src={languageOption.flag} className="h-4"/>
                    <span className="content-center">{languageOption.name}</span>
                </button>
            ))}
        </div>
    )
}

