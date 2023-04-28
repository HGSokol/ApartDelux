import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { Idata } from '../App';
import IMG from '../../img/Header1.png';
import IMG1 from '../../img/Header2.png';
import IMG2 from '../../img/rect1.png';

interface ApartProps {
  data: Idata[];
  setActivePopup: Dispatch<SetStateAction<boolean>>;
  activeSlider: number;
}

function SliderPopup(props: ApartProps) {
  const [currentImg, setCurrentImg] = useState(0);
  const [slideText, setSlideText] = useState(1);
  const ref = useRef<HTMLDivElement | null>(null);

  const dataSlider = props.data[props.activeSlider];

  const arr = [IMG, IMG1, IMG2, IMG1, IMG, IMG1, IMG2, IMG1].slice(0, props.activeSlider);

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

  return (
    <div
      id="popup"
      className={`relative w-[374rem] h-[377rem] lg:text-[20rem] text-white position z-[1000] lg:w-[1030rem] lg:h-[605rem] bg-cover bg-no-repeat overflow-hidden`}
    >
      <div
        className="flex flex-row absolute h-[100%] overflow-hidden duration-[300ms]"
        style={{
          transform: `translateX(-${
            window.innerWidth < 1024 ? String(374 * currentImg) : String(1030 * currentImg)
          }rem)`,
        }}
      >
        {arr.map((_, i) => {
          return (
            <div
              ref={ref}
              key={i}
              className="w-[374rem] h-[377rem] lg:w-[1030rem] lg:h-[605rem] bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${arr[i]})` }}
            ></div>
          );
        })}
      </div>

      {/* <div onClick={() => props.setActivePopup(false)} className="absolute cursor-pointer">
				<RxCross2
					style={{
						width: '20rem',
						height: '20rem',
						color: 'white',
					}}
				/>
			</div> */}
      <div
        onClick={left}
        className={`cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-[38rem] text-[40rem]
				${currentImg === 0 ? ' hidden' : ' visible'}`}
      >
        {window.innerWidth < 1024 ? (
          <svg
            width="19"
            height="60"
            viewBox="0 0 19 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 2L4 31.5556L16 58" stroke="white" strokeOpacity="0.3" strokeWidth="6" />
          </svg>
        ) : (
          <svg
            width="26"
            height="86"
            viewBox="0 0 26 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 2L5 45.2778L22 84" stroke="white" strokeOpacity="0.3" strokeWidth="8" />
          </svg>
        )}
      </div>
      <div
        onClick={right}
        className={`cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[38rem] text-[40rem]
				${currentImg === arr.length - 1 ? ' hidden' : ' visible'}`}
      >
        {window.innerWidth < 1024 ? (
          <svg
            width="19"
            height="60"
            viewBox="0 0 19 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 2L15 31.5556L3 58" stroke="white" strokeOpacity="0.3" strokeWidth="6" />
          </svg>
        ) : (
          <svg
            width="26"
            height="86"
            viewBox="0 0 26 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 2L21 45.2778L4 84" stroke="white" strokeOpacity="0.3" strokeWidth="8" />
          </svg>
        )}
      </div>
      <div
        className={` pt-[16rem] pl-[21rem] absolute bottom-0 left-0 w-[254rem] h-[110rem] lg:w-[600rem] lg:h-[234rem] lg:pl-[42rem] lg:pt-[33rem] bg-[#A1A1A1CC]/[0.8] text-[10rem] 
				${currentImg >= 1 ? ' hidden' : ' visible'}`}
      >
        {slideText === 1 ? (
          <div>
            <div className="lg:hidden">
              <div className="font-font1 font-[700] text-[22rem] leading-[21rem] text-[#171717] mb-[7rem]">
                {`Deluxe Apart ${dataSlider.name}`}
              </div>
              <div className="flex flex-row gap-[20rem] mb-[8rem]">
                <div className="font-font1 font-[600] text-[8rem] leading-[12rem] text-[#333333]">
                  Заезд: 14:00
                </div>
                <div className="font-font1 font-[600] text-[8rem] leading-[12rem] text-[#333333]">
                  Выезд: до 11:00
                </div>
              </div>
              <div className="flex flex-row mb-[11rem] gap-[8rem]">
                {dataSlider.description.map((e, i) => {
                  if (e[1] === '') return;
                  return (
                    <div
                      key={i}
                      className={`grid items-center w-[12rem] h-[12rem] font-font1 font-[600] text-[#4A4A4A] text-[12rem] leading-[18rem] whitespace`}
                    >
                      <img src={e[1]} alt="" />
                    </div>
                  );
                })}
              </div>
              <div className="font-font2 font-[700] text-[10rem] leading-[12rem] text-[#925E10]">
                {dataSlider.adress}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="font-font1 font-[700] text-[22rem] leading-[21rem] text-[#171717] mb-[7rem] lg:text-[32rem] lg:leading-[31rem] lg:mb-[12rem] ">
                {`Deluxe Apart ${dataSlider.name}`}
              </div>
              <div className="font-font2 font-[700] text-[13rem] leading-[17rem] text-[#171717] mb-[9rem]">
                Апартаменты идеально подойдут для командировок и туристического отдыха. Во дворе
                есть детская площадка и бесплатная охраняемая парковка. Весь двор оборудован
                видеонаблюдением. В здании дома находится фитнес-центр, салон красоты, офис такси,
                охраняемая парковка.
              </div>
              <div className="mb-[21rem] font-font2 font-[700] text-[13rem] leading-[17rem] text-[#171717]">
                Заезд в любое время с 14:00.{' '}
              </div>
              <div className="font-font2 font-[700] text-[14rem] leading-[17rem] text-[#925E10]">
                {dataSlider.adress}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="hidden lg:block">
              <div className="font-font1 font-[700] text-[22rem] leading-[21rem] text-[#171717] mb-[14rem]">
                Что мы предлагаем:
              </div>
              <div className="grid grid-rows-5 grid-flow-col ">
                {dataSlider.description.map((e, i) => {
                  return (
                    <div
                      key={i}
                      className={`${
                        i > 4 && i < 10 ? ' pl-[40rem]' : ''
                      } grid items-center w-[172rem] h-[25rem] font-font1 font-[600] text-[#4A4A4A] text-[12rem] leading-[18rem] whitespace`}
                    >
                      {`${e[0]}`}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div className="absolute bottom-[13rem] right-1/2 transform -translate-x-1/2 hidden lg:flex lg:flex-row">
          <div onClick={() => setSlideText(1)} className="cursor-pointer">
            <RxDotFilled
              style={{
                color: `${slideText === 1 ? 'white' : '#A1A1A1'}`,
                width: '10rem',
                height: '15rem',
              }}
            />
          </div>
          <div onClick={() => setSlideText(2)} className="cursor-pointer">
            <RxDotFilled
              style={{
                color: `${slideText === 2 ? 'white' : '#A1A1A1'}`,
                width: '10rem',
                height: '15rem',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderPopup;
