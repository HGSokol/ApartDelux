import { Dispatch, SetStateAction } from 'react';
import SliderPopup from '../components/SliderPopup';

import Apart from '../components/Apart';
import img1 from '../../img/rect1.png';
import img2 from '../../img/rect2.png';
import img3 from '../../img/rect3.png';
import img4 from '../../img/rect4.png';
import img5 from '../../img/rect5.png';
import img6 from '../../img/rect6.png';
import img7 from '../../img/rect7.png';
import img8 from '../../img/rect8.png';
import img9 from '../../img/rect9.png';

interface GaleryProps {
	setActivePopup: Dispatch<SetStateAction<boolean>>;
}

function Galery(props: GaleryProps) {
	const apartInfo = [
		{
			img: img1,
			name: '1',
			photo: [],
		},
		{
			img: img2,
			name: '2',
			photo: [],
		},
		{
			img: img3,
			name: '3',
			photo: [],
		},
		{
			img: img4,
			name: '4',
			photo: [],
		},
		{
			img: img5,
			name: '5',
			photo: [],
		},
		{
			img: img6,
			name: '6',
			photo: [],
		},
		{
			img: img7,
			name: '7',
			photo: [],
		},
		{
			img: img8,
			name: '8',
			photo: [],
		},
		{
			img: img9,
			name: '9',
			photo: [],
		},
	];

	return (
		<div id="galery" className="mx-[20rem] lg:mx-0 mb-[61rem] lg:mb-[163rem] relative">
			<div className="z-1 font-font1 font-[900] text-[80rem] leading-[95rem] lg:text-[160rem] lg:leading-[191rem] text-[#755E422B]/[0.17] lg:mb-[30rem] mb-[25rem]">
				Галерея
			</div>
			<div className="z-0 grid grid-cols-3 grid-rows-3 gap-[4rem] lg:gap-[20rem]">
				{apartInfo.map((e, i) => {
					return (
						<div key={i} className="cursor-pointer">
							<Apart setActivePopup={props.setActivePopup} items={e} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Galery;
