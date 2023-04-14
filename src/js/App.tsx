import { useState, useEffect, useRef } from 'react';
import Header from './layouts/Header';
import Preview from './layouts/Preview';
import Galery from './layouts/Galery';
import ContactInfo from './layouts/ContactInfo';
import Footer from './layouts/Footer';
import SliderPopup from '../js/components/SliderPopup';

function App() {
	const [activePopup, setActivePopup] = useState(false);

	// const closePopup = (e) => {
	// 	const target = e.target as HTMLButtonElement;

	// 	if (activePopup && !target.matches('#popup')) {
	// 		setActivePopup(false);
	// 	}
	// };

	// useEffect(() => {
	// 	document.addEventListener('click', closePopup);
	// 	return () => {
	// 		document.removeEventListener('click', closePopup);
	// 	};
	// }, []);

	if (activePopup) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	// console.log(activePopup);
	return (
		<div
			className={`bg-gradient-to-b from-[#171717] from-0% via-[#171717]/[0.79] via-36% to-[#292929] to-100%`}>
			{activePopup ? (
				<div className="h-[100%] bg-slate-200">
					<div className="xxx z-[1000] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] fixed">
						<SliderPopup setActivePopup={setActivePopup} />
					</div>
				</div>
			) : null}
			<div className="lg:mx-[100rem] z-1">
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
