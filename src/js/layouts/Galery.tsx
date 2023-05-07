import { useState, Dispatch, SetStateAction } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Apartaments } from '../App';

interface ApartProps {
  setActivePopup: Dispatch<SetStateAction<boolean>>;
  setActiveSlider: Dispatch<SetStateAction<number>>;
}

function Galery(props: ApartProps) {
  const [currentSliderList, setCurrentSliderList] = useState<number>(0);

  const left = () => {
    if (currentSliderList >= 1) {
      setCurrentSliderList((prev) => prev - 1);
    }
  };
  const right = () => {
    if (currentSliderList <= Apartaments.length - 5) {
      setCurrentSliderList((prev) => prev + 1);
    }
  };

  return (
    <div id="galery" className="pt-[60rem] lg:pt-[80rem] relative mb-[60rem] lg:mb-[100rem]">
      <div className="tracking-[0.015em] ml-[16rem] lg:ml-[202rem] font-font1 font-[700] text-[32rem] lg:text-[46rem] leading-[31rem] lg:leading-[46rem] text-[#FAFAFA] mb-[48rem] lg:mb-[13rem]">
        Галерея
      </div>
      <div className="hidden lg:flex right-0 w-full justify-end pr-[101rem] mb-[37rem] gap-[28rem]">
        <div onClick={() => left()} className="text-white text-[20rem] cursor-pointer">
          <svg
            className="w-[92rem] h-[16rem] stroke-[#575757] hover:stroke-[#B99772] duration-[300ms]"
            viewBox="0 0 92 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M92 8L0.999999 8.00001M0.999999 8.00001L12.5 15.5M0.999999 8.00001L12.5 0.500007" />
          </svg>
        </div>
        <div onClick={() => right()} className="text-white text-[20rem] cursor-pointer">
          <svg
            className="w-[92rem] h-[16rem] stroke-[#D6AF85] hover:stroke-[#B99772] duration-[300ms]"
            viewBox="0 0 92 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 8L91 8M91 8L79.5 0.5M91 8L79.5 15.5" />
          </svg>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="overflow-x-scroll lg:overflow-hidden w-screen lg:w-max snap-x snap-mandatory lg:snap-none relative flex flex-row gap-[16rem] lg:gap-0 cursor-pointer duration-[600ms]"
          style={{
            transform: `translateX(-${currentSliderList * 360}rem)`,
          }}
        >
          {Apartaments.map((apartament, index) => {
            return (
              <div
                className="snap-center lg:snap-none shrink-0 h-auto w-auto"
                key={index}
                onClick={() => {
                  props.setActivePopup(true);
                  props.setActiveSlider(index);
                }}
              >
                <LazyLoadComponent>
                  <div
                    className={`relative font-font2 bg-cover bg-no-repeat font-[400] text-[16rem] leading-[20rem] snap-center text-[#FAFAFA] w-[255rem] h-[400rem] lg:w-[360rem] lg:h-[635rem] 
                    ${index === 8 ? ' ' : ' bg-[-110rem] lg:bg-[-230rem]'}`}
                    style={{
                      backgroundImage: `url(${apartament.img})`,
                      backgroundPosition:
                        window.innerWidth < 1024
                          ? `${apartament.galerySetting[0]}`
                          : `${apartament.galerySetting[1]}`,
                    }}
                  >
                    <div className="absolute w-[100%] h-[100%] bg-black/[0.4] duration-[500ms] lg:hover:bg-black/[0]">
                      <div className="uppercase tracking-[0.015em] font-font1 font-[400] text-[16rem] leading-[20rem] pt-[19rem] pl-[21rem] lg:pl-[30rem] lg:pt-[30rem] w-[100rem] h-[65rem] lg:w-[105rem] lg:h-[40rem]">
                        {apartament.name}
                      </div>
                    </div>
                  </div>
                </LazyLoadComponent>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Galery;
