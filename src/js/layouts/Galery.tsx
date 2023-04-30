import { Dispatch, SetStateAction } from 'react';
import SliderPopup from '../components/SliderPopup';
import Apart from '../components/Apart';
import { Idata } from '../App';

function Galery() {
	return (
		<div id="galery" className="mb-[120rem] lg:mb-[200rem]">
			<div className="ml-[16rem] lg:ml-[202rem] font-font1 font-[700] text-[32rem] lg:text-[48rem] leading-[31rem] lg:leading-[46rem] text-[#FAFAFA] mb-[48rem] lg:mb-[64rem]">
				Галерея
			</div>
			<div className="s">
				<div className="a">lrft</div>
				<div className="a">rght</div>
			</div>
			<div className="s">galery</div>
		</div>
	);
}

export default Galery;
