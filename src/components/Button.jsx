import React, { useState, useRef } from "react";
import { criarPolaroid, envie, miniSelector, squareSelector, wideSelector, fotoErrada, download, size } from "../assets";
import { logo } from "../assets";
import { toPng } from "html-to-image";
import { saveAs } from 'file-saver';
import html2canvas from "html2canvas";

export default function Button() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [popupVisible, setPopupVisible] = useState(false);
  const [bannerType, setBannerType] = useState("");

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

    setPopupVisible(true);
  };
  {/* Consts para o upload da imagem */}

  {/* Para o preview da imagem */}
  const handleBannerType = type => {
    setBannerType(type);
  };
  {/* Para o preview da imagem */}

  {/* Para definir a opacidade do botão criarPolaroid */}
  const criarPolaroidStyle = {
    opacity: image.raw ? 1 : 0.5,
  };
  {/* Para definir a opacidade do botão criarPolaroid */}



    const domEl = useRef(null);

    const downloadImage = async () => {
    const dataUrl = await toPng(domEl.current);

    // download image
    const link = document.createElement('a');
    link.download = 'minha-polaroidSe.png';
    link.href = dataUrl;
    link.click();
};



  return (
    <div className="flex flex-col items-center">

      {/* Botões */}
      <form onSubmit={handleUpload} className="flex flex-col sm:flex-row justify-between w-full">

        {/* Botão: Envie sua Foto */}
        <label htmlFor="upload-button">
          <img
            src={envie}
            alt="envie"
            className="w-[205.19px] h-[392.04] object-contain mx-auto"
          />
        </label>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleChange}
        />
        {/* Botão: Envie sua Foto */}

        {/* Botão: Criar Polaroid */}
        <label htmlFor="up" className="ml-0 sm:ml-4 mt-4 sm:mt-0" style={criarPolaroidStyle}>
          <img
            src={criarPolaroid}
            alt="criarPolaroid"
            className="w-[205.19px] h-[392.04] object-contain mx-auto"
          />
        </label>
        <input
          type="submit"
          value={""}
          id="up"
          disabled={!image.raw}
        />
        {/* Botão: Criar Polaroid */}

      </form>
      {/* Botões */}

      {/* TELA DE POPUP */}
      {popupVisible && (        
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-50">
  
        <div className="flex bg-white h-screen sm:h-screen xl:h-5/6 w-screen md:w-2/6 sm:w-4/6  mx-4 rounded-lg p-6 max-w-4xl w-full relative">

        {/* Botão para fechar o Popup */}
        <button
          className="flex bg-transparent border-none text-2xl font-bold leading-none cursor-pointer p-2 rounded text-black hover:text-gray-600  absolute top-2 right-4"
          onClick={() => setPopupVisible(false)}
        >
          X
        </button>
        {/* Botão para fechar o Popup */}
  
          <div className="flex flex-col  justify-center items-center w-full">

            <div className="flex flex-col space-y-2">

            <img src={logo} alt="hoobank" className="w-52 mx-auto absolue drop-shadow-lg"/>

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
              <div className="flex flex-col justify-center items-center mt-4">
              
                <img
                  src={size}
                  className="cursor-pointer mb-2 w-[205.19px] h-[392.04]"
                />
            
                {/* Botões de escolha do Tamanho */}
                <img
                  src={miniSelector}
                  onClick={() => handleBannerType("mini")}
                  className="cursor-pointer mb-2 w-[205.19px] h-[392.04]"
                />
                <img
                  src={squareSelector}
                  onClick={() => handleBannerType("square")}
                  className="cursor-pointer mb-2 w-[205.19px] h-[392.04]"
                />
                <img
                  src={wideSelector}
                  onClick={() => handleBannerType("wide")}
                  className="cursor-pointer mb-2 w-[205.19px] h-[392.04]"
                />
                {/* Botões de escolha do Tamanho */}

                {/* Botão de mudança de foto */}
                <div>
                  <label htmlFor="upload-button">
                    <img
                      src={fotoErrada}
                      alt="fotoErrada"
                      className="w-[205.19px] h-[392.04]"
                    />
                  </label>
                  <input
                    id="upload-button"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onloadend = () => {
                        setImage({ file: file, preview: reader.result });
                      };
                    }}
                  />
                </div>
                {/* Botão de mudança de foto */}
                

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
