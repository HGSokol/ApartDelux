import { useState, Dispatch, SetStateAction } from 'react';

interface ApartProps {
	img?: string;
	name?: string;
	setActivePopup: Dispatch<SetStateAction<boolean>>;
}

function SliderPopup(props: ApartProps) {
	return (
		<div
			onClick={() => props.setActivePopup(false)}
			id="popup"
			className={`lg:text-[20rem] lg:text-white lg:position lg:z-[1000] lg:w-[1030rem] lg:h-[605rem] lg:bg-black lg:relative lg:bg-cover lg:bg-no-repeat`}>
			<div>asfasf</div>
		</div>
	);
}

export default SliderPopup;
