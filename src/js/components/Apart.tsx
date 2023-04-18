import { useEffect,useState, Dispatch, SetStateAction } from 'react';
import { Idata } from '../App'
interface ApartProps {
  items:Idata;
	setActivePopup: Dispatch<SetStateAction<boolean>>;
}

function Apart(props: ApartProps) {
	const { items, setActivePopup } = props;

	return (
		<div
			onClick={() => setActivePopup(true)}
			className={`w-[122rem] h-[122rem] lg:w-[400rem] lg:h-[304rem] relative bg-cover bg-no-repeat`}
			style={{ backgroundImage: `url(${items.img})` }}>
			<div className="bg-[#A1A1A1CC]/[0.8] w-[27rem] h-[23rem] lg:w-[200rem] lg:h-[54rem] absolute left-0 bottom-0 text-[12rem] leading-[11rem] lg:text-[22rem] text-[#171717] font-font1 font-[700] lg:leading-[21rem] flex items-center justify-center">
				{window.innerWidth >= 1024 ? `Deluxe Apart ${items.name}` : `${items.name}`}
			</div>
		</div>
	);
}

export default Apart;
