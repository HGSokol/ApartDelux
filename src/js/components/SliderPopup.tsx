import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { WiTime8 } from 'react-icons/wi';
import { IoLocationOutline } from 'react-icons/io5';
import { Idata } from '../App';
import IMG from '../../img/Header1.png';
import IMG1 from '../../img/Header2.png';
import IMG2 from '../../img/rect1.png';

interface ApartProps {
	Apartaments: Idata[];
	setActivePopup: Dispatch<SetStateAction<boolean>>;
	setOpenSlider: Dispatch<SetStateAction<boolean>>;
	openSlider: boolean;
	activeSlider: number;
}

function SliderPopup(props: ApartProps) {
	const [currentImg, setCurrentImg] = useState(0);
	const [slideText, setSlideText] = useState(1);

	const ref = useRef<HTMLDivElement | null>(null);

	const dataSlider = props.Apartaments[props.activeSlider];

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

	const isOddLength = props.Apartaments[props.activeSlider].description.length % 2 === 0;
	const oddCount =
		props.Apartaments[props.activeSlider].description.length % 2 === 0
			? props.Apartaments[props.activeSlider].description.length / 2
			: (props.Apartaments[props.activeSlider].description.length - 1) / 2 + 1;

	console.log(isOddLength, oddCount);

	return (
		<div
			id="popup"
			className={`relative w-[374rem] h-[377rem] lg:text-[20rem] text-white position z-[1000] lg:w-[1120rem] lg:h-[661rem] bg-cover bg-no-repeat overflow-hidden`}>
			{!props.openSlider ? (
				<div className="h-[100%] bg-white w-[100%] flex flex-row">
					<div
						className=" bg-cover w-[448rem] bg-[-200rem]"
						style={{ backgroundImage: `url(${props.Apartaments[props.activeSlider].img})` }}></div>
					<div className="lg:p-[48rem] w-[672rem]">
						<div className="font-font1 font-[400] lg:text-[32rem] lg:leading-[31rem] text-[#1E1E1E] lg:mb-[32rem]">
							{props.Apartaments[props.activeSlider].name}
						</div>
						<div className="font-font2 font-[400] text-[14rem] leading-[20rem] text-[#575757] mb-[18rem]">
							Апартаменты идеально подойдут для командировок и туристического отдыха. Во дворе есть
							детская площадка и бесплатная охраняемая парковка. Весь двор оборудован
							видеонаблюдением. В здании дома находится фитнес-центр, салон красоты, офис такси,
							охраняемая парковка.{' '}
						</div>
						<div className="font-font2 font-[600] text-[14rem] leading-[19rem] text-[#1E1E1E] mb-[18rem]">
							Что мы предлагаем:
						</div>
						<div
							className={`grid grid-flow-col gap-[6rem]  
						${isOddLength ? ` grid-rows-[${oddCount}] mb-[53rem]` : ` grid-rows-[${oddCount}] mb-[33rem]`}`}
							style={{
								gridTemplateRows: `repeat(${
									isOddLength ? `${oddCount}` : `${oddCount}`
								}, minmax(0, 1fr))`,
							}}>
							{props.Apartaments[props.activeSlider].description.map((description, index) => {
								return (
									<div key={index} className="flex flex-row gap-[12rem] items-center">
										<div className="s">
											<svg
												width="12"
												height="2"
												viewBox="0 0 12 2"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M0 0.25L12 0.25V1.75L0 1.75V0.25Z"
													fill="#D6AF85"
												/>
											</svg>
										</div>
										<div className="w-[200rem] h-[20rem] font-font2 font-[400] text-[14rem] leading-[20rem] text-[#575757]">
											{description[0]}
										</div>
									</div>
								);
							})}
						</div>
						<div className="flex flex-row gap-[11rem] mb-[14rem]">
							<div className="s">
								<WiTime8 className="w-[30rem] h-[30rem] lg:w-[18rem] lg:h-[18rem] text-[#C8C3C3]" />
							</div>
							<div className="font-font2 font-[600] text-[16rem] leading-[22rem] text-[#B99772]">
								Заезд в любое время с 14:00.{' '}
							</div>
						</div>
						<div className="flex flex-row gap-[11rem] mb-[49rem]">
							<div className="s">
								<IoLocationOutline className="w-[30rem] h-[30rem] lg:w-[18rem] lg:h-[18rem] text-[#C8C3C3]" />
							</div>
							<div className="font-font2 font-[600] text-[16rem] leading-[22rem] text-[#B99772]">
								ул. 17 сентября, 12
							</div>
						</div>
						<div className="w-full flex justify-center">
							<div
								onClick={() => props.setOpenSlider(true)}
								className="cursor-pointer lg:w-[181rem] lg:h-[56rem] bg-[#D6AF85] flex justify-center items-center font-font2 font-[600] text-[14rem] leading-[19rem] text-[#FAFAFA]">
								Смотреть фото
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="">
					<div
						className="flex flex-row absolute  overflow-hidden duration-[300ms]"
						style={{
							transform: `translateX(-${
								window.innerWidth < 1024 ? String(374 * currentImg) : String(1030 * currentImg)
							}rem)`,
						}}>
						{arr.map((_, i) => {
							return (
								<div
									ref={ref}
									key={i}
									className="w-[374rem] h-[377rem] lg:w-[1030rem] lg:h-[605rem] bg-cover bg-no-repeat"
									style={{
										backgroundImage: `url(${props.Apartaments[props.activeSlider].img})`,
									}}></div>
							);
						})}
					</div>
					<div
						onClick={left}
						className={`cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-[38rem] text-[40rem]
				${currentImg === 0 ? ' hidden' : ' visible'}`}>
						{window.innerWidth < 1024 ? (
							<svg
								width="19"
								height="60"
								viewBox="0 0 19 60"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M16 2L4 31.5556L16 58"
									stroke="white"
									strokeOpacity="0.3"
									strokeWidth="6"
								/>
							</svg>
						) : (
							<svg
								width="26"
								height="86"
								viewBox="0 0 26 86"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M22 2L5 45.2778L22 84"
									stroke="white"
									strokeOpacity="0.3"
									strokeWidth="8"
								/>
							</svg>
						)}
					</div>
					<div
						onClick={right}
						className={`cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[38rem] text-[40rem]
				${currentImg === arr.length - 1 ? ' hidden' : ' visible'}`}>
						{window.innerWidth < 1024 ? (
							<svg
								width="19"
								height="60"
								viewBox="0 0 19 60"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M3 2L15 31.5556L3 58" stroke="white" strokeOpacity="0.3" strokeWidth="6" />
							</svg>
						) : (
							<svg
								width="26"
								height="86"
								viewBox="0 0 26 86"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M4 2L21 45.2778L4 84" stroke="white" strokeOpacity="0.3" strokeWidth="8" />
							</svg>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default SliderPopup;
