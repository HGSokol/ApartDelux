import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { RxDoubleArrowDown } from 'react-icons/rx';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { SiViber } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import { Apartaments } from '../App';

function Header() {
  return (
    <div className="mb-[80rem] lg:mb-[80rem] overflow-hidden">
      <div className=" px-[16rem] lg:px-[0rem] pt-[24rem] bg-[length:760rem_640rem] bg-[-245rem] bg-no-repeat bg-[url('../img/header1_1.png')] lg:bg-none transition duration-[400ms] h-[640rem] lg:h-[900rem] lg:flex lg:flex-row mb-[36rem] lg:mb-[0rem] flex flex-row justify-between flex-wrap lg:flex-nowrap lg:justify-normal lg:pt-0 lg:pl-[41rem]">
        <div className="flex flex-row gap-[11rem] items-center h-[17rem] lg:order-3 lg:pr-[100rem] lg:pt-[38rem]">
          <div>
            <svg
              className="w-[15rem] h-[15rem] stroke-[#C8C3C3]"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 3.875C1.25 14.5755 9.92448 23.25 20.625 23.25C21.1078 23.25 21.5864 23.2323 22.0603 23.1976C22.6042 23.1578 22.8762 23.1379 23.1237 22.9954C23.3287 22.8773 23.5232 22.6681 23.6259 22.455C23.75 22.1977 23.75 21.8977 23.75 21.2975V17.7759C23.75 17.2712 23.75 17.0188 23.6669 16.8025C23.5936 16.6114 23.4744 16.4412 23.3199 16.307C23.145 16.155 22.9078 16.0687 22.4335 15.8963L18.4249 14.4386C17.8731 14.2379 17.5972 14.1376 17.3354 14.1546C17.1045 14.1697 16.8824 14.2484 16.6937 14.3822C16.4796 14.5339 16.3286 14.7857 16.0265 15.2892L15 17C11.6877 15.4999 9.00237 12.8111 7.5 9.5L9.21079 8.47353C9.71431 8.17141 9.96608 8.02035 10.1178 7.80633C10.2516 7.6176 10.3303 7.39546 10.3454 7.16462C10.3624 6.90283 10.2621 6.62691 10.0614 6.07507L10.0614 6.07506L8.60373 2.06651C8.43126 1.5922 8.34501 1.35504 8.19302 1.18012C8.05876 1.02561 7.88862 0.906436 7.69753 0.833064C7.4812 0.75 7.22885 0.75 6.72415 0.75H3.20252C2.60235 0.75 2.30226 0.75 2.04497 0.874066C1.83188 0.976822 1.62267 1.17127 1.50463 1.37629C1.3621 1.62383 1.34219 1.89577 1.30236 2.43966C1.26766 2.91357 1.25 3.39222 1.25 3.875Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="lg: font-font2 font-[400] text-[14rem]  lg:text-[16rem] leading-[19rem] text-[#C8C3C3] ">
            +375 (29) 221-00-00
          </div>
        </div>
        <div className="w-max flex flex-col lg:items-center lg:pt-[40rem] lg:order-1 lg:mr-[41rem] lg:w-[40rem]">
          <div className="hidden lg:flex lg:flex-col lg:gap-[27rem] lg:mb-[83rem]">
            <div className="uppercase lg:relative mode lg:-rotate-180 lg:font-font1 lg:font-[300] lg:text-[16rem] lg:text-[#FFFFFF] lg:whitespace-nowrap">
              <div>Deluxe Apart</div>
            </div>
          </div>
          <div className="hidden lg:flex bg-[#D6AF85] w-[91rem] h-[1rem] -rotate-90 whitespace-nowrap lg:mb-[420rem]"></div>
          <div className="flex flex-col gap-[24rem] lg:gap-[38rem]">
            <a
              href={'https://www.instagram.com/kvartira.brest.nasutki/'}
              target="_blank"
              className="cursor-pointer"
            >
              <svg
                className="w-[20rem] h-[20rem] lg:w-[18rem] lg:h-[18rem] fill-[#C8C3C3] hover:fill-[#D6AF85]"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.9583 4.29167C16.5441 4.29167 16.2083 4.62745 16.2083 5.04167C16.2083 5.45588 16.5441 5.79167 16.9583 5.79167V4.29167ZM16.9692 5.79167C17.3834 5.79167 17.7192 5.45588 17.7192 5.04167C17.7192 4.62745 17.3834 4.29167 16.9692 4.29167V5.79167ZM15.6667 11C15.6667 13.5773 13.5773 15.6667 11 15.6667V17.1667C14.4058 17.1667 17.1667 14.4058 17.1667 11H15.6667ZM11 15.6667C8.42267 15.6667 6.33333 13.5773 6.33333 11H4.83333C4.83333 14.4058 7.59424 17.1667 11 17.1667V15.6667ZM6.33333 11C6.33333 8.42267 8.42267 6.33333 11 6.33333V4.83333C7.59424 4.83333 4.83333 7.59424 4.83333 11H6.33333ZM11 6.33333C13.5773 6.33333 15.6667 8.42267 15.6667 11H17.1667C17.1667 7.59424 14.4058 4.83333 11 4.83333V6.33333ZM4.5 2H17.5V0.5H4.5V2ZM20 4.5V17.5H21.5V4.5H20ZM17.5 20H4.5V21.5H17.5V20ZM2 17.5V4.5H0.5V17.5H2ZM4.5 20C3.11929 20 2 18.8807 2 17.5H0.5C0.5 19.7091 2.29086 21.5 4.5 21.5V20ZM20 17.5C20 18.8807 18.8807 20 17.5 20V21.5C19.7091 21.5 21.5 19.7091 21.5 17.5H20ZM17.5 2C18.8807 2 20 3.11929 20 4.5H21.5C21.5 2.29086 19.7091 0.5 17.5 0.5V2ZM4.5 0.5C2.29086 0.5 0.5 2.29086 0.5 4.5H2C2 3.11929 3.11929 2 4.5 2V0.5ZM16.9583 5.79167H16.9692V4.29167H16.9583V5.79167ZM16.75 5.04167C16.75 4.92661 16.8433 4.83333 16.9583 4.83333V6.33333C17.6717 6.33333 18.25 5.75503 18.25 5.04167H16.75ZM16.9583 4.83333C17.0734 4.83333 17.1667 4.92661 17.1667 5.04167H15.6667C15.6667 5.75503 16.245 6.33333 16.9583 6.33333V4.83333ZM17.1667 5.04167C17.1667 5.15673 17.0734 5.25 16.9583 5.25V3.75C16.245 3.75 15.6667 4.3283 15.6667 5.04167H17.1667ZM16.9583 5.25C16.8433 5.25 16.75 5.15673 16.75 5.04167H18.25C18.25 4.3283 17.6717 3.75 16.9583 3.75V5.25Z" />
              </svg>
            </a>
            <a href={'https://t.me/luxkvartiry'} target="_blank" className="cursor-pointer">
              <svg
                className="w-[22rem] h-[20rem] lg:w-[20rem] lg:h-[18rem] stroke-[#C8C3C3] hover:stroke-[#D6AF85]"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5033 1.38199L1.58014 9.75126C1.41991 9.81535 1.41063 10.0387 1.56498 10.1158L6.48982 12.5783C6.54838 12.6075 6.61756 12.6063 6.67503 12.575L17.1238 6.87562C17.33 6.76319 17.5277 7.03652 17.3564 7.19711L9.8965 14.1907C9.85617 14.2285 9.83329 14.2814 9.83329 14.3366V20.1259C9.83329 20.3205 10.0829 20.4005 10.196 20.2422L12.4392 17.1017C12.4977 17.0198 12.6081 16.9941 12.6968 17.0419L19.3372 20.6175C19.4579 20.6825 19.6067 20.6095 19.6293 20.4742L22.7749 1.60057C22.8005 1.44676 22.6481 1.32408 22.5033 1.38199Z"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={'viber://chat?number=%2B375292210000'}
              target="_blank"
              className="cursor-pointer"
            >
              <SiViber className="w-[22rem] h-[20rem] lg:w-[20rem] lg:h-[18rem] text-[#C8C3C3] hover:text-[#D6AF85]" />
            </a>
            <a href={'https://wa.me/8029221000'} target="_blank" className="cursor-pointer">
              <BsWhatsapp className="w-[22rem] h-[20rem] lg:w-[20rem] lg:h-[18rem] text-[#C8C3C3] hover:text-[#D6AF85]" />
            </a>
          </div>
        </div>
        <div className="lg:bg-[url('../img/header1_1.png')] lg:pt-[39rem] lg:pl-[85rem] lg:bg-contain lg:w-[890rem] lg:bg-no-repeat lg:order-2 lg:mr-[146rem] lg:relative">
          <div className="hidden lg:flex lg:flex-row lg:gap-[29rem] lg:absolute lg:translate-x-[618rem] lg:translate-y-[590rem]">
            <LazyLoadComponent>
              <div
                className="bg-cover bg-no-repeat bg-[-45rem] lg:w-[225rem] lg:h-[209rem]"
                style={{
                  backgroundImage: `url(${Apartaments[2].photos[0]})`,
                }}
              ></div>
            </LazyLoadComponent>
            <LazyLoadComponent>
              <div
                className="bg-cover bg-no-repeat lg:bg-[-45rem] lg:w-[225rem] lg:h-[209rem]"
                style={{
                  backgroundImage: `url(${Apartaments[3].photos[1]})`,
                }}
              ></div>
            </LazyLoadComponent>
            <LazyLoadComponent>
              <div
                className="bg-cover bg-no-repeat lg:bg-[-90rem] lg:w-[225rem] lg:h-[209rem]"
                style={{
                  backgroundImage: `url(${Apartaments[0].img})`,
                }}
              ></div>
            </LazyLoadComponent>
          </div>
          <div className="hidden lg:flex lg:flex-row lg:gap-[48rem] lg:font-font2 lg:font-[700rem] lg:text-[16rem] lg:leading-[22rem] lg:mb-[145rem]">
            <a
              href={'#about'}
              className="duration-[400ms] tracking-[0.06em] cursor-pointer text-[#C8C3C3] hover:text-[#D6AF85]"
            >
              О нас
            </a>
            <a
              href={'#galery'}
              className="duration-[400ms] tracking-[0.06em] cursor-pointer text-[#C8C3C3] hover:text-[#D6AF85]"
            >
              Галерея
            </a>
            <a
              href={'#contacts'}
              className="duration-[400ms] tracking-[0.06em] cursor-pointer text-[#C8C3C3] hover:text-[#D6AF85]"
            >
              Контакты
            </a>
          </div>
          <div className="">
            <div className="tracking-[0.015em] pt-[92rem] lg:pt-[0rem] font-font1 font-[700] text-[48rem] lg:text-[128rem] leading-[46rem] lg:leading-[123rem] lg:tracking-[2.1rem] text-[#FAFAFA] mb-[24rem] lg:mb-[49rem]">
              Deluxe Apartments
            </div>
            <div className="w-[340rem] tracking-[0.06em] font-font2 font-[400rem] text-[14rem] lg:text-[16rem] leading-[20rem] lg:leading-[22rem] lg:w-[561rem] text-[#FAFAFA] mb-[48rem] lg:mb-[68rem]">
              Апартаменты являются частью элитного квартирного комплекса и находятся в самом центре
              города Бреста.
            </div>
            <a
              href={'#contacts'}
              className="group cursor-pointer duration-[500ms] hover:bg-[#B99772] lg:pl-[36rem] lg:hover:w-[232rem] w-full lg:w-[200rem] h-[56rem] bg-[#D6AF85] flex flex-row justify-center lg:justify-normal  items-center "
            >
              <div className=" lg:mr-[18rem] font-font2 font-[600] text-[14rem] leading-[19rem] text-[#FAFAFA]">
                Связаться с нами
              </div>
              <div className="hidden lg:flex duration-[500ms] opacity-0 lg:group-hover:opacity-100 font-font2 font-[600] text-[14rem] leading-[19rem] text-[#FAFAFA]">
                <HiOutlineArrowNarrowRight className="w-[19.5rem] h-[19.5rem] lg:w-[22rem] lg:h-[22rem]" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full flex items-center justify-center">
        <RxDoubleArrowDown className="w-[30rem] h-[30rem] text-[#C8C3C3]" />
      </div>
    </div>
  );
}

export default Header;
