import { IoLocationOutline } from 'react-icons/io5';

function Footer() {
	return (
		<div className="pt-[32rem] lg:py-[32rem]  border-t-[1rem] border-[#575757] ">
			<div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-end lg:mx-[100rem]">
				<div className="flex flex-col w-full justify-center items-center lg:items-start mb-[34rem] lg:mb-0 lg:w-[238rem]">
					<div className="font-font1 font-[700] text-[16rem] lg:text-[20rem] lg:leading-[19rem] text-[#FFFFFF] leading-[15rem] mb-[18rem]">
						DELUXE APART{' '}
					</div>
					<div className="flex flex-row gap-[10rem] lg:gap-[8rem] items-center justify-center">
						<div>
							<IoLocationOutline className="w-[30rem] h-[30rem] lg:w-[18rem] lg:h-[18rem] text-[#C8C3C3]" />
						</div>
						<div className="tracking-[0.06em] font-font2 font-[400] text-[14rem] lg:text-[16rem] lg:leading-[22rem] leading-[19rem] text-[#C8C3C3] ">
							Беларусь, Брест
						</div>
					</div>
				</div>
				<div className="flex flex-col tracking-[0.06em] w-full items-center justify-center lg:items-end font-font2 font-[400] text-[14rem] lg:text-[16rem] lg:leading-[22rem] leading-[19rem] text-[#C8C3C3] mb-[32rem] lg:mb-0 lg:order-3 lg:w-[238rem]">
					<div className="mb-[8rem] lg:mb-[16rem]">+375(29)221-00-00</div>
					<div>kvartirylux.brest@gmail.com</div>
				</div>
				<div className="mb-[32rem] tracking-[0.06em] lg:mb-0 font-font2 font-[400] text-[12rem] lg:text-[14rem] lg:leading-[19rem] leading-[17rem] text-[#575757] lg:order-2 ">
					© 2023 Deluxe Apart.
				</div>
			</div>
		</div>
	);
}

export default Footer;
