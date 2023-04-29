// import { useState, useEffect } from 'react';
// import { RxCross2 } from 'react-icons/rx';
// import { HiArrowLongRight } from 'react-icons/hi2';
import { FiPhone } from 'react-icons/fi';
import { CgInstagram } from 'react-icons/cg';
import { TbBrandTelegram } from 'react-icons/tb';
import { RiFacebookBoxLine } from 'react-icons/ri';

function Header() {
  // const [openMenu, setOpenMenu] = useState(false);

  // const closeBurger = (e) => {
  //   const target = e.target as HTMLButtonElement;

  //   if (target.matches('#burgerCl')) {
  //     setOpenMenu(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('click', closeBurger);
  //   return () => {
  //     document.removeEventListener('click', closeBurger);
  //   };
  // }, []);

  // if (openMenu) {
  //   document.body.classList.add('active-burger');
  // } else {
  //   document.body.classList.remove('active-burger');
  // }

  return (
    <div className=" px-[16rem] pt-[24rem] bg-[length:760rem_640rem] bg-[-245rem] bg-no-repeat bg-[url('../img/header1_1.png')] lg:bg-none transition duration-[400ms] h-[640rem] lg:h-[900rem] lg:flex lg:flex-row lg:mb-[149rem] mb-[36rem] flex flex-row justify-between flex-wrap lg:flex-nowrap lg:justify-normal lg:pt-0 lg:pl-[41rem]">
      <div className=" flex flex-row gap-[11rem] items-center h-[17rem] lg:order-3 lg:pr-[100rem] lg:pt-[38rem]">
        <div className="">
          <FiPhone className="w-[15rem] h-[15rem] text-[#C8C3C3]" />
        </div>
        <div className="font-font2 font-[400] text-[14rem] leading-[19rem] text-[#C8C3C3] ">
          +375 (29) 221-00-00
        </div>
      </div>
      <div className="w-max flex flex-col lg:items-center lg:pt-[40rem] lg:order-1 lg:mr-[41rem] lg:w-[40rem]">
        <div className="hidden lg:flex lg:flex-col lg:gap-[27rem] lg:mb-[83rem]">
          <div className="lg:relative mode lg:-rotate-180 lg:font-font1 lg:font-[300] lg:text-[16rem] lg:text-[#FFFFFF] lg:whitespace-nowrap">
            <div className="">Deluxe Apart</div>
          </div>
        </div>
        <div className="hidden lg:flex bg-[#D6AF85] w-[91rem] h-[1rem] -rotate-90 whitespace-nowrap lg:mb-[470rem]"></div>
        <div className="flex flex-col gap-[24rem] lg:gap-[38rem]">
          <div className="">
            <CgInstagram className="w-[19.5rem] h-[19.5rem] lg:w-[22rem] lg:h-[22rem] text-[#C8C3C3]" />
          </div>
          <div className="">
            <TbBrandTelegram className="w-[19.5rem] h-[19.5rem] lg:w-[22rem] lg:h-[22rem] text-[#C8C3C3]" />
          </div>
          <div className="">
            <RiFacebookBoxLine className="w-[19.5rem] h-[19.5rem] lg:w-[22rem] lg:h-[22rem] text-[#C8C3C3]" />
          </div>
        </div>
      </div>
      <div className="lg:bg-[url('../img/header1_1.png')] lg:pt-[39rem] lg:pl-[85rem] lg:bg-contain lg:w-[890rem] lg:bg-no-repeat lg:order-2 lg:mr-[146rem] lg:relative">
        <div className="hidden lg:flex lg:flex-row lg:gap-[29rem] lg:absolute lg:translate-x-[615rem] lg:translate-y-[590rem]">
          <div className="lg:w-[225rem] lg:h-[209rem] bg-black"></div>
          <div className="lg:w-[225rem] lg:h-[209rem] bg-black"></div>
          <div className="lg:w-[225rem] lg:h-[209rem] bg-black"></div>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:gap-[48rem] lg:font-font2 lg:font-[700rem] lg:text-[16rem] lg:leading-[22rem] text-[#C8C3C3] lg:mb-[145rem]">
          <div className="d">О нас</div>
          <div className="d">Галерея</div>
          <div className="d">Контакты</div>
        </div>
        <div className="">
          <div className="font-font1 font-[700rem] text-[48rem] lg:text-[128rem] leading-[46rem] lg:leading-[123rem] lg:tracking-[2.1rem] text-[#FAFAFA] mb-[24rem] lg:mb-[49rem]">
            Deluxe Apartments
          </div>
          <div className="w-[290rem] font-font2 font-[400rem] text-[14rem] lg:text-[16rem] leading-[19rem] lg:leading-[22rem] lg:w-[440rem] text-[#FAFAFA] mb-[48rem] lg:mb-[68rem]">
            Апартаменты являются частью элитного квартирного комплекса и находятся в самом центре
            города Бреста.
          </div>
          <div className="w-full lg:w-[200rem] h-[56rem] bg-[#D6AF85] flex justify-center items-center font-font2 font-[600] text-[14rem] leading-[19rem] text-[#FAFAFA]">
            Связаться с нами
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
