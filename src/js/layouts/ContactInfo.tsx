import { CgInstagram } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { TbBrandTelegram } from 'react-icons/tb';

function ContactInfo() {
	return (
		<div
			id="contacts"
			className="mx-[16rem] lg:mx-[496rem] flex flex-col items-center mb-[139rem] lg:mb-[204rem]">
			<div className="font-font1 font-[700] text-[32rem] lg:text-[48rem] leading-[31rem] lg:leading-[46rem] text-[#FAFAFA] mb-[52rem]">
				Связаться с нами
			</div>
			<div className="flex flex-col items-center">
				<div className="mb-[24rem] flex flex-row items-center gap-[18rem]">
					<div className="">
						<FiPhone className="w-[15rem] h-[15rem] text-[#D6AF85]" />
					</div>
					<div className="text-[#D6AF85] font-font2 font-[400] text-[16rem] leading-[22rem]">
						+375 (29) 221-00-00
					</div>
					<div className="text-[#D6AF85] font-font2 font-[400] text-[16rem] leading-[22rem]">
						(Ксения)
					</div>
				</div>
				<div className="mb-[28rem] flex flex-row gap-[18rem] items-center">
					<div className="a">
						<HiOutlineMail className="w-[15rem] h-[15rem] text-[#D6AF85] " />
					</div>
					<div className="text-[#D6AF85] font-font2 font-[400] text-[16rem] leading-[22rem]">
						kvartirylux.brest@gmail.com
					</div>
				</div>
			</div>
			<div className="w-[91rem] h-[1rem] bg-[#575757] mb-[27rem]"></div>
			<div className="flex flex-row gap-[24rem] lg:gap-[38rem]">
				<div className="cursor-pointer">
					<CgInstagram className="w-[19.5rem] h-[19.5rem] lg:w-[22rem] lg:h-[22rem] text-[#C8C3C3] hover:text-[#D6AF85]" />
				</div>
				<div className="cursor-pointer">
					<TbBrandTelegram className="w-[19.5rem] h-[19.5rem] lg:w-[22rem] lg:h-[22rem] text-[#C8C3C3] hover:text-[#D6AF85]" />
				</div>
				<div className="cursor-pointer">
					<RiFacebookBoxLine className="w-[19.5rem] h-[19.5rem] lg:w-[22rem] lg:h-[22rem] text-[#C8C3C3] hover:text-[#D6AF85]" />
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
