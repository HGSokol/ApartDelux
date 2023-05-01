import { useState, Dispatch, SetStateAction } from 'react';
import { Idata } from '../App';

interface ApartProps {
	Apartaments: Idata[];
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
		if (currentSliderList <= props.Apartaments.length - 5) {
			setCurrentSliderList((prev) => prev + 1);
		}
	};

	return (
		<div id="galery" className="relative mb-[120rem] lg:mb-[200rem]">
			<div className="ml-[16rem] lg:ml-[202rem] font-font1 font-[700] text-[32rem] lg:text-[48rem] leading-[31rem] lg:leading-[46rem] text-[#FAFAFA] mb-[48rem] lg:mb-[13rem]">
				Галерея
			</div>
			<div className="hidden lg:flex right-0 w-full justify-end pr-[101rem] mb-[37rem] gap-[28rem]">
				<div onClick={() => left()} className="text-white text-[20rem] cursor-pointer">
					<svg
						className="stroke-[#575757] hover:stroke-[#B99772] duration-[300ms]"
						width="92"
						height="16"
						viewBox="0 0 92 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M92 8L0.999999 8.00001M0.999999 8.00001L12.5 15.5M0.999999 8.00001L12.5 0.500007" />
					</svg>
				</div>
				<div onClick={() => right()} className=" text-white text-[20rem] cursor-pointer">
					<svg
						className="stroke-[#D6AF85] hover:stroke-[#B99772] duration-[300ms]"
						width="92"
						height="16"
						viewBox="0 0 92 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M0 8L91 8M91 8L79.5 0.5M91 8L79.5 15.5" />
					</svg>
				</div>
			</div>
			<div className="overflow-x-scroll lg:overflow-hidden snap-proximity">
				<div
					className={`relative flex flex-row w-max gap-[16rem] lg:gap-0 cursor-pointer duration-[600ms] `}
					style={{
						transform: `translateX(-${currentSliderList * 360}rem)`,
					}}>
					{props.Apartaments.map((apartament, index) => {
						return (
							<div
								key={index}
								onClick={() => {
									props.setActivePopup(true);
									props.setActiveSlider(index);
								}}
								className="relative bg-[-110rem] lg:bg-[-230rem] font-font2 bg-cover bg-no-repeat font-[400] text-[16rem] leading-[20rem] snap-center text-[#FAFAFA] w-[255rem] h-[400rem] lg:w-[360rem] lg:h-[635rem] "
								style={{ backgroundImage: `url(${apartament.img})` }}>
								<div className="absolute w-[100%] h-[100%] bg-black/[0.4] duration-[500ms] hover:bg-black/[0]"></div>
								<div className="pt-[19rem] pl-[21rem] lg:pl-[30rem] lg:pt-[30rem] w-[92rem] h-[35rem] lg:w-[100rem] lg:h-[40rem]">
									{apartament.name}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Galery;
