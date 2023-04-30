import { useState } from 'react';

function Galery() {
	const [currentSliderList, setCurrentSliderList] = useState<number>(0);
	const m = [
		{
			img: '1',
		},
		{
			img: '2',
		},
		{
			img: '3',
		},
		{
			img: '4',
		},
		{
			img: '5',
		},
		{
			img: '6',
		},
		{
			img: '6',
		},
		{
			img: '6',
		},
		{
			img: '6',
		},
		{
			img: '6',
		},
		{
			img: '6',
		},
	];

	const left = () => {
		if (currentSliderList >= 1) {
			setCurrentSliderList((prev) => prev - 1);
		}
	};
	const right = () => {
		if (currentSliderList <= m.length - 5) {
			setCurrentSliderList((prev) => prev + 1);
		}
	};

	console.log(currentSliderList);

	return (
		<div id="galery" className="mb-[120rem] lg:mb-[200rem]">
			<div className="ml-[16rem] lg:ml-[202rem] font-font1 font-[700] text-[32rem] lg:text-[48rem] leading-[31rem] lg:leading-[46rem] text-[#FAFAFA] mb-[48rem] lg:mb-[64rem]">
				Галерея
			</div>
			<div className="hidden lg:flex right-0 w-full justify-end pr-[101rem] mb-[37rem] gap-[28rem]">
				<div onClick={() => left()} className="a text-white text-[20rem] cursor-pointer">
					<svg
						className="stroke-[#575757] hover:stroke-[#B99772]"
						width="92"
						height="16"
						viewBox="0 0 92 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M92 8L0.999999 8.00001M0.999999 8.00001L12.5 15.5M0.999999 8.00001L12.5 0.500007" />
					</svg>
				</div>
				<div onClick={() => right()} className="a text-white text-[20rem] cursor-pointer">
					<svg
						className="stroke-[#D6AF85] hover:stroke-[#B99772]"
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
					{m.map((apart, index) => {
						return (
							<div
								key={index}
								className="snap-center w-[255rem] h-[400rem] lg:w-[360rem] lg:h-[635rem] bg-white border-[2rem] border-black text-white text-[17rem]">
								{apart.img}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Galery;
