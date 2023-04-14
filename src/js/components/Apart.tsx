import { useState, Dispatch, SetStateAction } from 'react';

interface ApartProps {
	items: {
		img: string;
		name: string;
	};
	setActivePopup: Dispatch<SetStateAction<boolean>>;
}

function Apart(props: ApartProps) {
	const { items, setActivePopup } = props;

	return (
		<div
			onClick={() => setActivePopup(true)}
			className={`lg:w-[400rem] lg:h-[304rem] lg:relative lg:bg-cover lg:bg-no-repeat`}
			style={{ backgroundImage: `url(${items.img})` }}>
			<div className="lg:bg-[#A1A1A1CC]/[0.8] lg:w-[200rem] lg:h-[54rem] lg:absolute lg:left-0 lg:bottom-0 lg:text-[22rem] lg:text-[#171717] lg:font1 lg:font-[700] lg:leading-[21rem] lg:flex lg:items-center lg:justify-center">
				{items.name}
			</div>
		</div>
	);
}

export default Apart;
