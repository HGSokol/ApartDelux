import { useState, useRef, Dispatch, SetStateAction } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import { WiTime8 } from 'react-icons/wi';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Apartaments } from '../App';

interface ApartProps {
  setActivePopup: Dispatch<SetStateAction<boolean>>;
  setOpenSlider: Dispatch<SetStateAction<boolean>>;
  openSlider: boolean;
  activeSlider: number;
}

function SliderPopup(props: ApartProps) {
  const [currentImg, setCurrentImg] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const dataSlider = Apartaments[props.activeSlider];

  const arr = dataSlider.photos.slice(0, dataSlider.photos.length);

  const right = () => {
    if (currentImg <= arr.length - 2) {
      setCurrentImg((prev) => prev + 1);
    }
  };
  const left = () => {
    if (currentImg > 0) {
      setCurrentImg((prev) => prev - 1);
    }
  };

  const isOddLength = Apartaments[props.activeSlider].descriptions.length % 2 === 0;

  return (
    <div
      id="popup"
      className={`relative lg:text-[20rem] text-white position z-[1000] lg:w-[1120rem] lg:h-[661rem] bg-cover bg-no-repeat overflow-hidden
			${props.openSlider ? ' w-[343rem] h-[202rem]' : ' w-[343rem] h-[533rem]'}`}
    >
      {!props.openSlider ? (
        <div className="h-[100%] bg-white w-[100%] lg:flex lg:flex-row">
          <div className="hidden lg:flex">
            <LazyLoadComponent>
              <div
                className={`bg-cover w-[343rem] lg:w-[448rem] 
                `}
                style={{
                  backgroundImage: `url(${Apartaments[props.activeSlider].photos[0]})`,
                  backgroundPosition: `${Apartaments[props.activeSlider].galerySetting[1]}`,
                }}
              ></div>
            </LazyLoadComponent>
          </div>
          <div className="py-[24rem] px-[16rem] lg:p-[48rem] w-[343rem] lg:w-[672rem]">
            <div className="font-font1 font-[400] text-[24rem] lg:text-[32rem] leading-[23rem] lg:leading-[31rem] text-[#1E1E1E] mb-[16rem] lg:mb-[32rem]">
              {Apartaments[props.activeSlider].name}
            </div>
            <div className="font-font2 font-[400] text-[14rem] lg:text-[14rem] leading-[17rem] lg:leading-[20rem] text-[#575757] mb-[12rem] lg:mb-[18rem]">
              Апартаменты идеально подойдут для командировок и туристического отдыха. Во дворе есть
              детская площадка и бесплатная охраняемая парковка. Весь двор оборудован
              видеонаблюдением. В здании дома находится фитнес-центр, салон красоты, офис такси,
              охраняемая парковка.{' '}
            </div>
            <div className="font-font2 font-[600] text-[14rem] leading-[19rem] text-[#1E1E1E] mb-[12rem] lg:mb-[18rem]">
              Что мы предлагаем:
            </div>
            <div
              className={`flex  flex-col flex-wrap gap-[5rem] lg:gap-[6rem] mb-[18.5rem] 
							${
                isOddLength
                  ? ` h-[115rem] lg:h-[140rem] lg:mb-[53rem]`
                  : ` h-[118rem] lg:h-[150rem] lg:mb-[33rem]`
              }`}
            >
              {Apartaments[props.activeSlider].descriptions.map((description, index) => {
                return (
                  <div key={index} className="flex flex-row gap-[12rem] items-top ">
                    <div className="pt-[5rem] lg:pt-[10rem]">
                      <svg
                        className="w-[12rem] h-[2rem]"
                        viewBox="0 0 12 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 0.25L12 0.25V1.75L0 1.75V0.25Z"
                          fill="#D6AF85"
                        />
                      </svg>
                    </div>
                    <div className="w-[123rem] lg:w-[200rem] lg:h-[20rem] font-font2 font-[400] text-[12rem] lg:text-[14rem] leading-[13rem] lg:leading-[20rem] text-[#575757]">
                      {description}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row items-center gap-[13rem] lg:gap-[11rem] mb-[16rem] lg:mb-[14rem]">
              <div>
                <WiTime8 className="w-[18rem] h-[18rem] text-[#C8C3C3]" />
              </div>
              <div className="font-font2 font-[600] text-[14rem] lg:text-[16rem] leading-[20rem] lg:leading-[22rem] text-[#B99772]">
                Заезд в любое время с 14:00.{' '}
              </div>
            </div>
            <div className="flex flex-row items-center gap-[13rem] lg:gap-[11rem] mb-[26rem] lg:mb-[49rem]">
              <div>
                <IoLocationOutline className="w-[18rem] h-[18rem] text-[#C8C3C3]" />
              </div>
              <div className="font-font2 font-[600] text-[14rem] lg:text-[16rem] leading-[20rem] lg:leading-[22rem] text-[#B99772]">
                ул. 17 сентября, 12
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div
                onClick={() => props.setOpenSlider(true)}
                className="group cursor-pointer duration-[500ms] hover:bg-[#B99772] lg:pl-[36rem] lg:hover:w-[210rem] w-[149rem] lg:w-[181rem] h-[45rem] lg:h-[56rem] bg-[#D6AF85] flex justify-center lg:justify-normal items-center font-font2 font-[600] text-[12rem] lg:text-[14rem] leading-[17rem] lg:leading-[19rem] text-[#FAFAFA]"
              >
                <div className="font-font2 font-[600] text-[14rem] leading-[19rem] text-[#FAFAFA] lg:mr-[14rem]">
                  Смотреть фото
                </div>
                <div className="hidden lg:flex font-font2 font-[600] text-[14rem] leading-[19rem] text-[#FAFAFA] duration-[500ms] opacity-0 lg:group-hover:opacity-100">
                  <HiOutlineArrowNarrowRight className="w-[19.5rem] h-[19.5rem] lg:w-[22rem] lg:h-[22rem]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="flex flex-row absolute overflow-hidden duration-[300ms]"
            style={{
              transform: `translateX(-${
                window.innerWidth < 1024 ? String(343 * currentImg) : String(1120 * currentImg)
              }rem)`,
            }}
          >
            {arr.map((_, i) => {
              return (
                <LazyLoadComponent key={i}>
                  <div
                    ref={ref}
                    key={i}
                    className="w-[343rem] h-[202rem] bg-cover bg-center bg-no-repeat lg:w-[1120rem] lg:h-[661rem]"
                    style={{
                      backgroundImage: `url(${Apartaments[props.activeSlider].photos[i]})`,
                      backgroundPosition:
                        window.innerWidth < 1024
                          ? `${Apartaments[props.activeSlider].photosSetting[i][0]}`
                          : `${Apartaments[props.activeSlider].photosSetting[i][1]}`,
                    }}
                  ></div>
                </LazyLoadComponent>
              );
            })}
          </div>
          <div
            onClick={left}
            className={`group hover:bg-white/[0.4] duration-[150ms] w-[40rem] lg:w-[120rem] h-full cursor-pointer absolute text-[40rem]
				${currentImg === 0 ? ' hidden' : ' visible'}`}
          >
            <svg
              className="w-[19rem] h-[60rem] lg:w-[26rem] lg:h-[86rem]  absolute left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 duration-[150ms] stroke-white/[0.3]  group-hover:stroke-white"
              viewBox="0 0 19 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2L4 31.5556L16 58" strokeWidth="6" />
            </svg>
          </div>
          <div
            onClick={right}
            className={`group hover:bg-white/[0.4] duration-[150ms] right-[0rem] h-full  w-[40rem] lg:w-[120rem] cursor-pointer absolute top-1/2 transform -translate-y-1/2 text-[40rem]
				${currentImg === arr.length - 1 ? ' hidden' : ' visible'}`}
          >
            <svg
              className="w-[19rem] h-[60rem] lg:w-[26rem] lg:h-[86rem] absolute right-1/2 translate-x-1/2 top-1/2 transform -translate-y-1/2 duration-[150ms] stroke-white/[0.3]  group-hover:stroke-white"
              viewBox="0 0 19 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 2L15 31.5556L3 58" strokeWidth="6" />
            </svg>
          </div>
          <div className="hidden absolute dutarion-[500ms] lg:flex flex-row gap-[8rem] bottom-[20rem] right-1/2 translate-x-1/2">
            {Apartaments[props.activeSlider].photos.map((e, i) => {
              return (
                <div key={i}>
                  {currentImg === i ? (
                    <svg
                      className="w-[20rem] h-[8rem]"
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="8" rx="4" fill="#D6AF85" />
                    </svg>
                  ) : (
                    <svg
                      className="cursor-pointer w-[8rem] h-[8rem]"
                      onClick={() => setCurrentImg(i)}
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="8" height="8" rx="4" fill="#C8C3C3" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SliderPopup;
