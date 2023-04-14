import { useState, useEffect } from 'react';
import Header from './layouts/Header';
import Preview from './layouts/Preview';
import Galery from './layouts/Galery';
import ContactInfo from './layouts/ContactInfo';
import Footer from './layouts/Footer';
import SliderPopup from '../js/components/SliderPopup';

function App() {
	const [activePopup, setActivePopup] = useState(false);

	return (
		<div className="lg:bg-gradient-to-b lg:from-[#171717] lg:from-0% lg:via-[#171717]/[0.79] lg:via-36% lg:to-[#292929] lg:to-100%">
			{activePopup ? (
				<div className="lg:z-[1000] lg:left-[50%] lg:top-[50%] lg:-translate-x-[50%] lg:-translate-y-[50%] lg:fixed">
					<SliderPopup setActivePopup={setActivePopup} />
				</div>
			) : null}
			<div className="lg:mx-[100rem] lg:z-1">
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
