import { useState, useEffect } from 'react';
import Header from './layouts/Header';
import Preview from './layouts/Preview';
import Galery from './layouts/Galery';
import ContactInfo from './layouts/ContactInfo';
import Footer from './layouts/Footer';
import SliderPopup from '../js/components/SliderPopup';

import img1_1 from '../img/Header1.png';
import img1_2 from '../img/Header1.png';
import img1_3 from '../img/Header1.png';
import img1_4 from '../img/Header1.png';
import img2_1 from '../img/rect2.png';
import img2_2 from '../img/rect2.png';
import img2_3 from '../img/rect2.png';
import img2_4 from '../img/rect2.png';
import img3_1 from '../img/rect3.png';
import img3_2 from '../img/rect3.png';
import img3_3 from '../img/rect3.png';
import img3_4 from '../img/rect3.png';
import img4_1 from '../img/rect4.png';
import img4_2 from '../img/rect4.png';
import img4_3 from '../img/rect4.png';
import img4_4 from '../img/rect4.png';
import img5_1 from '../img/rect5.png';
import img5_2 from '../img/rect5.png';
import img5_3 from '../img/rect5.png';
import img5_4 from '../img/rect5.png';
import img6_1 from '../img/rect6.png';
import img6_2 from '../img/rect6.png';
import img6_3 from '../img/rect6.png';
import img6_4 from '../img/rect6.png';
import img7_1 from '../img/rect7.png';
import img7_2 from '../img/rect7.png';
import img7_3 from '../img/rect7.png';
import img7_4 from '../img/rect7.png';
import img8_1 from '../img/rect8.png';
import img8_2 from '../img/rect8.png';
import img8_3 from '../img/rect8.png';
import img8_4 from '../img/rect8.png';
import img9_1 from '../img/rect9.png';
import img9_2 from '../img/rect9.png';
import img9_3 from '../img/rect9.png';
import img9_4 from '../img/Header2.png';

export interface Idata {
	img: string;
	name: string;
	descriptions: string[];
	adress: string;
	photos: string[];
}

export const Apartaments: Idata[] = [
	{
		img: img1_1,
		name: 'Deluxe Apart 1',
		descriptions: [
			'1 диван-кровать',
			'1 двуспальная кровать',
			'Постельное белье',
			'Стиральная машина',
			'Кондиционер',
			'Телевизор',
			'Полотенца',
			'Фен',
			'Парковка',
			'Бесплатный wi-fi',
			'Туалетно-косметические пренадлежности',
		],
		adress: 'Адрес ул 17 сентября, 12',
		photos: [img1_1, img1_2, img1_3, img1_4],
	},
	{
		img: img2_1,
		name: 'Deluxe Apart 2',
		descriptions: [
			'1 диван-кровать',
			'1 двуспальная кровать',
			'Постельное белье',
			'Стиральная машина',
			'Кондиционер',
			'Телевизор',
			'Полотенца',
			'Фен',
			'Парковка',
			'Бесплатный wi-fi',
			'Туалетно-косметические пренадлежности',
		],
		adress: 'Адрес ул 17 сентября, 12',
		photos: [img2_1, img2_2, img2_3, img2_4],
	},
	{
		img: img3_1,
		name: 'Deluxe Apart 3',
		descriptions: [
			'1 двуспальная кровать',
			'Постельное белье',
			'Стиральная машина',
			'Кондиционер',
			'Телевизор',
			'Фен',
			'Полотенца',
			'Парковка',
			'Бесплатный wi-fi',
			'Туалетно-косметические пренадлежности',
		],
		adress: 'Адрес ул 17 сентября, 12',
		photos: [img3_1, img3_2, img3_3, img3_4],
	},
	{
		img: img4_1,
		name: 'Deluxe Apart 4',
		descriptions: [
			'1 двуспальная кровать',
			'Постельное белье',
			'Стиральная машина',
			'Кондиционер',
			'Телевизор',
			'Фен',
			'Полотенца',
			'Парковка',
			'Бесплатный wi-fi',
			'Туалетно-косметические пренадлежности',
		],
		adress: 'Адрес ул 17 сентября, 12',
		photos: [img4_1, img4_2, img4_3, img4_4],
	},
	{
		img: img5_1,
		name: 'Deluxe Apart 5',
		descriptions: [
			'1 диван-кровать',
			'1 двуспальная кровать',
			'Постельное белье',
			'Стиральная машина',
			'Кондиционер',
			'Телевизор',
			'Фен',
			'Полотенца',
			'Парковка',
			'Бесплатный wi-fi',
			'Туалетно-косметические пренадлежности',
		],
		adress: 'Адрес ул. Дзержинского, 34',
		photos: [img5_1, img5_2, img5_3, img5_4],
	},
	{
		img: img6_1,
		name: 'Deluxe Apart 6',
		descriptions: [
			'1 диван-кровать',
			'1 двуспальная кровать',
			'Постельное белье',
			'Стиральная машина',
			'Телевизор',
			'Фен',
			'Полотенца',
			'Парковка',
			'Бесплатный wi-fi',
			'Туалетно-косметические пренадлежности',
		],
		adress: 'Адрес ул 17 сентября, 12',
		photos: [img6_1, img6_2, img6_3, img6_4],
	},
	{
		img: img7_1,
		name: 'Deluxe Apart 7',
		descriptions: [
			'1 диван-кровать',
			'1 двуспальная кровать',
			'Постельное белье',
			'Стиральная машина',
			'Телевизор',
			'Фен',
			'Полотенца',
			'Парковка',
			'Бесплатный wi-fi',
			'Туалетно-косметические пренадлежности',
		],
		adress: 'Адрес ул 17 сентября, 12',
		photos: [img7_1, img7_2, img7_3, img7_4],
	},
	{
		img: img8_1,
		name: 'Deluxe Apart 8',
		descriptions: [
			'1 диван-кровать',
			'1 двуспальная кровать',
			'Постельное белье',
			'Стиральная машина',
			'Кондиционер',
			'Телевизор',
			'Фен',
			'Полотенца',
			'Парковка',
			'Бесплатный wi-fi',
			'Туалетно-косметические пренадлежности',
		],
		adress: 'Адрес ул 17 сентября, 12',
		photos: [img8_1, img8_2, img8_3, img8_4],
	},
	{
		img: img9_1,
		name: 'Deluxe Apart 9',
		descriptions: [
			'1 диван-кровать',
			'Постельное белье',
			'Стиральная машина',
			'Кондиционер',
			'Телевизор',
			'Фен',
			'Полотенца',
			'Парковка',
			'Бесплатный wi-fi',
			'Туалетно-косметические пренадлежности',
		],
		adress: 'Адрес ул 17 сентября, 12',
		photos: [img9_1, img9_2, img9_3, img9_4],
	},
];

function App() {
	const [activePopup, setActivePopup] = useState(false);
	const [openSlider, setOpenSlider] = useState(false);
	const [activeSlider, setActiveSlider] = useState(0);

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
		<div className="bg-[#1E1E1E]">
			{activePopup ? (
				<div className="bg-slate-200">
					<div
						id="sliderCl"
						className="h-[100vh] w-[100vw] grid items-center place-content-center z-[1000] fixed bg-[#000000]/[0.8] backdrop-blur-[4px]">
						<SliderPopup
							setActivePopup={setActivePopup}
							setOpenSlider={setOpenSlider}
							openSlider={openSlider}
							activeSlider={activeSlider}
						/>
					</div>
				</div>
			) : null}
			<div className="z-1 relative">
				<Header />
				<Preview />
				<Galery setActivePopup={setActivePopup} setActiveSlider={setActiveSlider} />
				<ContactInfo />
			</div>
			<Footer />
		</div>
	);
}

export default App;
