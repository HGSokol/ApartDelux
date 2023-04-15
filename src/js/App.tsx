import { useState, useEffect, useRef } from 'react';
import Header from './layouts/Header';
import Preview from './layouts/Preview';
import Galery from './layouts/Galery';
import ContactInfo from './layouts/ContactInfo';
import Footer from './layouts/Footer';
import SliderPopup from '../js/components/SliderPopup';

function App() {
	const [activePopup, setActivePopup] = useState(false);

	const closeSlider = (e) => {
		const target = e.target as HTMLButtonElement;

		if (target.matches('#sliderCl')) {
			setActivePopup(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', closeSlider);
		return () => {
			document.removeEventListener('click', closeSlider);
		};
	}, []);

	if (activePopup) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	return (
		<div
			className={`bg-gradient-to-b from-[#171717] from-0% via-[#171717]/[0.79] via-36% to-[#292929] to-100%`}>
			{activePopup ? (
				<div className=" bg-slate-200">
					<div
						id="sliderCl"
						className="h-[100vh] w-[100vw] grid items-center place-content-center xxx z-[1000] fixed bg-[#000000]/[0.8]">
						<SliderPopup setActivePopup={setActivePopup} />
					</div>
				</div>
			) : null}
			<div className="lg:mx-[100rem] z-1 ">
				<Header />
				<Preview />
				<Galery setActivePopup={setActivePopup} />
				<ContactInfo />
			</div>
			<Footer />
		</div>
	);
}

export default App;
