import React, { useState, useRef } from "react";
import { logo } from "../assets";
import { toPng } from "html-to-image";
import { Button, Modal } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import '../i18n/index';


export default function HeroActionButtons() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [bannerType, setBannerType] = useState("");

  const StyledButton = styled(Button)({
    backgroundColor: "black",
    color: "white",
    width:"205px",
    height:"44px",
    paddingLeft: "10px",
    marginLeft: "10px",
    marginTop: "6px",
    borderRadius: "10px",
    fontFamily: "NexaBold",
    fontSize: "13px",
    '&:hover':{
        backgroundColor: "rgba(0,0,0,0.8)",

    },
    '& input[type="file"]': {
      opacity: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      cursor: "pointer",
    },
});

  {/* Consts para o upload da imagem */}
  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    });
  };
  {/* Consts para o upload da imagem */}

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
  setAnchorEl(true);
  };
  const handleClose = () => {
  setAnchorEl(false);
    };

  {/* Para o preview da imagem */}
  const handleBannerType = type => {
    setBannerType(type);
  };
  {/* Para o preview da imagem */}

  {/* Para definir a opacidade do botão criarPolaroid */}

  {/* Para definir a opacidade do botão criarPolaroid */}

  const handleClearImage = () => {
    setImage({ preview: "", raw: "" });
  };
  


    const domEl = useRef(null);

    const downloadImage = async () => {
    const dataUrl = await toPng(domEl.current);

    // download image
    const link = document.createElement('a');
    link.download = 'minha-polaroidSe.png';
    link.href = dataUrl;
    link.click();
};

  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">

      <form onSubmit={handleUpload} className="flex flex-col sm:flex-row justify-between w-full">
        
        <StyledButton variant="contained" component="label" onClick={handleChange}>
          {t("send")}
          <input
            type="file"
            id="upload-button"
            accept="image/*"
            onChange={handleChange}
          />
        </StyledButton>

        <StyledButton variant="contained" onClick={handleClick} disabled={!image.raw}>
          {t("create")}
        </StyledButton>

      </form>

      {/* TELA DE POPUP */}
      {open && (        
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-50">
  
        <div className="flex bg-white h-screen sm:h-screen xl:h-5/6 w-screen md:w-2/6 sm:w-4/6  mx-4 rounded-lg p-6 max-w-4xl w-full relative">

        {/* Botão para fechar o Popup */}
        <button
          className="flex bg-transparent border-none text-2xl font-bold leading-none cursor-pointer p-2 rounded text-black hover:text-gray-600  absolute top-2 right-4"
          onClick={handleClose}
        >
          X
        </button>
        {/* Botão para fechar o Popup */}
  
          <div className="flex flex-col  justify-center items-center w-full">

            <div className="flex flex-col space-y-2">

            <img src={logo} alt="logo" className="w-52 mx-auto absolue drop-shadow-lg"/>

              {/* Preview da Imagem */}
                <div className="drop-shadow-lg pb-2">
                  <div
                    ref={domEl}
                    id="preview-image"
                    className={`relative ${
                      bannerType === "mini"
                        ? "w-[204.09px] h-[325.03px] border border-black border-opacity-0 rounded-[0px] p-[16px] pt-5 pb-12"
                        : bannerType === "square"
                        ? "w-[272.12px] h-[325.03px] border border-black border-opacity-0 rounded-[0px] p-[16px] pt-5 pb-12"
                        : bannerType === "wide"
                        ? "w-[408.18px] h-[325.03px] border border-black border-opacity-0 rounded-[0px] p-[16px] pt-5 pb-12"
                        : "w-[272.12px] h-[325.03px]"
                    } bg-white relative`}
                  >
                    <img
                      src={image.preview || "/assets/placeholder-image.png"}
                      alt="imagem enviada"
                      className={`w-full h-full object-cover rounded-[0px] ${
                        !bannerType ? "" : bannerType === "mini"
                        ? "filter-sepia filter-contrast filter-brightness filter-saturate"
                        : bannerType === "square"
                        ? "filter-sepia filter-contrast filter-brightness filter-saturate"
                        : bannerType === "wide"
                        ? "filter-sepia filter-contrast filter-brightness filter-saturate"
                        : ""
                      }`}
                      style={{ filter: 'sepia(30%) contrast(1.3) brightness(0.9) saturate(110%)' }}
                    />
                  </div>
                </div>
                {/* Preview da Imagem */}

              </div>

              <button onClick={downloadImage} className="bg-white border mt-2 border-gray-300 w-44 rounded-md py-1 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Download</button>

              {/* Seletores e Logo*/}
              <div className="flex flex-col justify-center items-center mr-2 mt-4">
                    
                
                <StyledButton variant="contained" onClick={() => handleBannerType("mini")}>
                  MINI
                </StyledButton>

                <StyledButton variant="contained" onClick={() => handleBannerType("square")}>
                  SQUARE
                </StyledButton>

                <StyledButton variant="contained" onClick={() => handleBannerType("wide")}>
                  WIDE
                </StyledButton>

                <StyledButton variant="contained" component="label" onClick={handleChange}>
                  {t("sendAnother")}
                  <input
                    type="file"
                    id="upload-button"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </StyledButton>

              </div>
              {/* Seletores e Logo*/}

          </div>
        </div>
      </div>
    )}
      {/* TELA DE POPUP */}

    </div>
  )
}
