import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { RxDotFilled } from 'react-icons/rx';
import IMG from '../../img/Header1.png';
import IMG1 from '../../img/Header2.png';
import IMG2 from '../../img/rect1.png';

interface ApartProps {
	img?: string;
	name?: string;
	photo?: [string];
	setActivePopup: Dispatch<SetStateAction<boolean>>;
}

function SliderPopup(props: ApartProps) {
	const [slideImg, setSlideImg] = useState(1);
	const [slideText, setSlideText] = useState(1);

	const arr = [IMG, IMG1, IMG2, IMG1];

	const right = () => {
		if (slideImg !== arr.length) setSlideImg((prev) => prev + 1);
	};
	const left = () => {
		if (slideImg !== 1) setSlideImg((prev) => prev - 1);
	};

	console.log(slideImg);

	return (
		<div
			id="popup"
			className={`relative w-[374rem] h-[377rem] lg:text-[20rem] text-white position z-[1000] lg:w-[1030rem] lg:h-[605rem] bg-cover bg-no-repeat`}
			style={{ backgroundImage: `url(${arr[slideImg - 1]})` }}>
			<div onClick={() => props.setActivePopup(false)} className="absolute cursor-pointer">
				<RxCross2
					style={{
						width: '20rem',
						height: '20rem',
						color: 'white',
					}}
				/>
			</div>
			<div
				onClick={left}
				className={`cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-[38rem] text-[40rem]
				${slideImg === 1 ? ' hidden' : ' visible'}`}>
				l
			</div>
			<div
				onClick={right}
				className={`cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[38rem] text-[40rem]
				${slideImg === arr.length ? ' hidden' : ' visible'}`}>
				r
			</div>
			<div
				className={` pt-[16rem] pl-[21rem] absolute bottom-0 left-0 w-[254rem] h-[110rem] lg:w-[600rem] lg:h-[234rem] lg:pl-[42rem] lg:pt-[33rem] bg-[#A1A1A1CC]/[0.8] text-[10rem] 
				${slideImg > 1 ? ' hidden' : ' visible'}`}>
				{slideText === 1 ? (
					// мобилк
					<div>
						<div className="lg:hidden">
							<div className="font-font1 font-[700] text-[22rem] leading-[21rem] text-[#171717] mb-[7rem]">
								Deluxe Apart 1
							</div>
							<div className="flex flex-row gap-[20rem] mb-[8rem]">
								<div className="font-font1 font-[600] text-[8rem] leading-[12rem] text-[#333333]">
									Заезд: 14:00
								</div>
								<div className="font-font1 font-[600] text-[8rem] leading-[12rem] text-[#333333]">
									Выезд: до 11:00
								</div>
							</div>
							<div className="mb-[11rem] text-[11rem]">----</div>
							<div className="font-font2 font-[700] text-[10rem] leading-[12rem] text-[#925E10]">
								Адрес ул 17 сентября, 12
							</div>
						</div>
						<div className="hidden lg:block">
							<div className="font-font1 font-[700] text-[22rem] leading-[21rem] text-[#171717] mb-[7rem] lg:text-[32rem] lg:leading-[31rem] lg:mb-[12rem] ">
								Deluxe Apart 1
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
								Адрес ул 17 сентября, 12
							</div>
						</div>
					</div>
				) : (
					// декстоп
					<div>
						<div className="hidden lg:block">
							<div className="font-font1 font-[700] text-[22rem] leading-[21rem] text-[#171717] mb-[14rem]">
								Что мы предлагаем:
							</div>
							<div className="grid grid-rows-5 grid-flow-col gap-[8rem]">
								{arr.map((_, i) => {
									return (
										<div className="font-font1 font-[600] text-[#292929] text-[12rem] leading-[18rem]">
											{i}
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
