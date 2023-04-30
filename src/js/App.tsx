import { useState, useEffect, useRef } from 'react';
import Header from './layouts/Header';
import Preview from './layouts/Preview';
import Galery from './layouts/Galery';
import ContactInfo from './layouts/ContactInfo';
import Footer from './layouts/Footer';
import SliderPopup from '../js/components/SliderPopup';

import Bed1 from '../img/bed-1.svg';
import Bed from '../img/bed.svg';
import AirConditioner from '../img/air-conditioner.svg';
import WashingMachine from '../img/washing-machine1.svg';
import WiFi from '../img/laptop.svg';
import Hairdryer from '../img/hairdryer.svg';
import TV from '../img/tv1.svg';
import Parking from '../img/parking.svg';
import Towel from '../img/towel.svg';
import FireExtinguisher from '../img/fire-extinguisher.svg';

import img1 from '../img/rect1.png';
import img2 from '../img/rect2.png';
import img3 from '../img/rect3.png';
import img4 from '../img/rect4.png';
import img5 from '../img/rect5.png';
import img6 from '../img/rect6.png';
import img7 from '../img/rect7.png';
import img8 from '../img/rect8.png';
import img9 from '../img/rect9.png';

export interface Idata {
	img: string;
	name: string;
	description: [string, string][];
	adress: string;
	photo: {
		mobile: string[];
		desc: string[];
	};
}

function App() {
	const [activePopup, setActivePopup] = useState(false);
	const [openSlider, setOpenSlider] = useState(false);
	const [activeSlider, setActiveSlider] = useState(0);

	const Apartaments: Idata[] = [
		{
			img: img1,
			name: 'Deluxe Apart 1',
			description: [
				['1 диван-кровать', Bed1],
				['1 двуспальная кровать', Bed],
				['Постельное белье', ''],
				['Стиральная машина', WashingMachine],
				['Туалетно-косметические пренадлежности', FireExtinguisher],
				['Кондиционер', AirConditioner],
				['Полотенца', Towel],
				['Фен', Hairdryer],
				['Парковка', Parking],
				['Телевизор', TV],
				['Бесплатный wi-fi', WiFi],
			],
			adress: 'Адрес ул 17 сентября, 12',
			photo: {
				mobile: [],
				desc: [],
			},
		},
		{
			img: img2,
			name: 'Deluxe Apart 2',
			description: [
				['1 диван-кровать', Bed1],
				['1 двуспальная кровать', Bed],
				['Постельное белье', ''],
				['Стиральная машина', WashingMachine],
				['Туалетно-косметические пренадлежности', FireExtinguisher],
				['Кондиционер', AirConditioner],
				['Полотенца', Towel],
				['Фен', Hairdryer],
				['Парковка', Parking],
				['Телевизор', TV],
				['Бесплатный wi-fi', WiFi],
			],
			adress: 'Адрес ул 17 сентября, 12',
			photo: {
				mobile: [],
				desc: [],
			},
		},
		{
			img: img3,
			name: 'Deluxe Apart 3',
			description: [
				['1 двуспальная кровать', Bed],
				['Бесплатный wi-fi', WiFi],
				['Постельное белье', ''],
				['Стиральная машина', WashingMachine],
				['Туалетно-косметические пренадлежности', FireExtinguisher],
				['Кондиционер', AirConditioner],
				['Полотенца', Towel],
				['Фен', Hairdryer],
				['Парковка', Parking],
				['Телевизор', TV],
			],
			adress: 'Адрес ул 17 сентября, 12',
			photo: {
				mobile: [],
				desc: [],
			},
		},
		{
			img: img4,
			name: 'Deluxe Apart 4',
			description: [
				['1 двуспальная кровать', Bed],
				['Бесплатный wi-fi', WiFi],
				['Постельное белье', ''],
				['Стиральная машина', WashingMachine],
				['Туалетно-косметические пренадлежности', FireExtinguisher],
				['Кондиционер', AirConditioner],
				['Полотенца', Towel],
				['Фен', Hairdryer],
				['Парковка', Parking],
				['Телевизор', TV],
			],
			adress: 'Адрес ул 17 сентября, 12',
			photo: {
				mobile: [],
				desc: [],
			},
		},
		{
			img: img5,
			name: 'Deluxe Apart 5',
			description: [
				['1 диван-кровать', Bed1],
				['1 двуспальная кровать', Bed],
				['Постельное белье', ''],
				['Стиральная машина', WashingMachine],
				['Туалетно-косметические пренадлежности', FireExtinguisher],
				['Кондиционер', AirConditioner],
				['Полотенца', Towel],
				['Фен', Hairdryer],
				['Парковка', Parking],
				['Телевизор', TV],
				['Бесплатный wi-fi', WiFi],
			],
			adress: 'Адрес ул. Дзержинского, 34',
			photo: {
				mobile: [],
				desc: [],
			},
		},
		{
			img: img6,
			name: 'Deluxe Apart 6',
			description: [
				['1 диван-кровать', Bed1],
				['1 двуспальная кровать', Bed],
				['Постельное белье', ''],
				['Стиральная машина', WashingMachine],
				['Туалетно-косметические пренадлежности', FireExtinguisher],
				['Бесплатный wi-fi', WiFi],
				['Полотенца', Towel],
				['Фен', Hairdryer],
				['Парковка', Parking],
				['Телевизор', TV],
			],
			adress: 'Адрес ул 17 сентября, 12',
			photo: {
				mobile: [],
				desc: [],
			},
		},
		{
			img: img7,
			name: 'Deluxe Apart 7',
			description: [
				['1 диван-кровать', Bed1],
				['1 двуспальная кровать', Bed],
				['Постельное белье', ''],
				['Стиральная машина', WashingMachine],
				['Туалетно-косметические пренадлежности', FireExtinguisher],
				['Бесплатный wi-fi', WiFi],
				['Полотенца', Towel],
				['Фен', Hairdryer],
				['Парковка', Parking],
				['Телевизор', TV],
			],
			adress: 'Адрес ул 17 сентября, 12',
			photo: {
				mobile: [],
				desc: [],
			},
		},
		{
			img: img8,
			name: 'Deluxe Apart 8',
			description: [
				['1 диван-кровать', Bed1],
				['1 двуспальная кровать', Bed],
				['Постельное белье', ''],
				['Стиральная машина', WashingMachine],
				['Туалетно-косметические пренадлежности', FireExtinguisher],
				['Кондиционер', AirConditioner],
				['Полотенца', Towel],
				['Фен', Hairdryer],
				['Парковка', Parking],
				['Телевизор', TV],
				['Бесплатный wi-fi', WiFi],
			],
			adress: 'Адрес ул 17 сентября, 12',
			photo: {
				mobile: [],
				desc: [],
			},
		},
		{
			img: img9,
			name: 'Deluxe Apart 9',
			description: [
				['1 диван-кровать', Bed1],
				['Бесплатный wi-fi', WiFi],
				['Постельное белье', ''],
				['Стиральная машина', WashingMachine],
				['Туалетно-косметические пренадлежности', FireExtinguisher],
				['Кондиционер', AirConditioner],
				['Полотенца', Towel],
				['Фен', Hairdryer],
				['Парковка', Parking],
				['Телевизор', TV],
			],
			adress: 'Адрес ул 17 сентября, 12',
			photo: {
				mobile: [],
				desc: [],
			},
		},
	];

	const closeSlider = (e) => {
		const target = e.target as HTMLButtonElement;

		if (target.matches('#sliderCl')) {
			setOpenSlider(false);
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
		<div className={`bg-[#1E1E1E] `}>
			{activePopup ? (
				<div className=" bg-slate-200 ">
					<div
						id="sliderCl"
						className="h-[100vh] w-[100vw] grid items-center place-content-center xxx z-[1000] fixed bg-[#000000]/[0.8] backdrop-blur-[4px]">
						<SliderPopup
							Apartaments={Apartaments}
							setActivePopup={setActivePopup}
							setOpenSlider={setOpenSlider}
							openSlider={openSlider}
							activeSlider={activeSlider}
						/>
					</div>
				</div>
			) : null}
			<div className=" z-1  relative">
				<Header />
				<Preview />
				<Galery
					Apartaments={Apartaments}
					setActivePopup={setActivePopup}
					setActiveSlider={setActiveSlider}
				/>
				<ContactInfo />
			</div>
			<Footer />
		</div>
	);
}

export default App;
