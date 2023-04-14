import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';

interface ApartProps {
	img?: string;
	name?: string;
	setActivePopup: Dispatch<SetStateAction<boolean>>;
}

function SliderPopup(props: ApartProps) {
	return (
		<div
			id="popup"
			className={`w-[374rem] h-[377rem] lg:text-[20rem] text-white position z-[1000] lg:w-[1030rem] lg:h-[605rem] bg-black relative bg-cover bg-no-repeat`}>
			<div onClick={() => props.setActivePopup(false)}>asfasf</div>
		</div>
	);
}

export default SliderPopup;
