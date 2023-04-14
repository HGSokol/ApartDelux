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
			name: 'Deluxe Apart 1',
		},
		{
			img: img2,
			name: 'Deluxe Apart 2',
		},
		{
			img: img3,
			name: 'Deluxe Apart 3',
		},
		{
			img: img4,
			name: 'Deluxe Apart 4',
		},
		{
			img: img5,
			name: 'Deluxe Apart 5',
		},
		{
			img: img6,
			name: 'Deluxe Apart 6',
		},
		{
			img: img7,
			name: 'Deluxe Apart 7',
		},
		{
			img: img8,
			name: 'Deluxe Apart 8',
		},
		{
			img: img9,
			name: 'Deluxe Apart 9',
		},
	];

	return (
		<div id="galery" className="lg:mb-[163rem] lg:relative">
			<div className="lg:z-1 lg:font1 lg:font-[900] lg:text-[160rem] lg:leading-[191rem] lg:text-[#755E422B]/[0.17] lg:mb-[30rem]">
				Галерея
			</div>
			<div className="lg:z-0 lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-[20rem]">
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
