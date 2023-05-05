import { useState, useEffect } from 'react';
import Header from './layouts/Header';
import Preview from './layouts/Preview';
import Galery from './layouts/Galery';
import ContactInfo from './layouts/ContactInfo';
import Footer from './layouts/Footer';
import SliderPopup from '../js/components/SliderPopup';

import img1_1 from '../img/../img/apart1_1.jpg';
import img1_2 from '../img/../img/apart1_2.jpg';
import img1_3 from '../img/../img/apart1_3.jpg';
import img1_4 from '../img/../img/apart1_4.jpg';
import img2_1 from '../img/../img/apart2_1.jpg';
import img2_2 from '../img/../img/apart2_2.jpg';
import img2_3 from '../img/../img/apart2_3.jpg';
import img2_4 from '../img/../img/apart2_4.jpg';
import img3_1 from '../img/../img/apart3_1.jpg';
import img3_2 from '../img/../img/apart3_2.jpg';
import img3_3 from '../img/../img/apart3_3.jpg';
import img3_4 from '../img/../img/apart3_4.jpg';
import img4_1 from '../img/../img/apart4_1.jpg';
import img4_2 from '../img/../img/apart4_2.jpg';
import img4_3 from '../img/../img/apart4_3.jpg';
import img4_4 from '../img/../img/apart4_4.jpg';
import img5_1 from '../img/../img/apart5_1.jpg';
import img5_2 from '../img/../img/apart5_2.jpg';
import img5_3 from '../img/../img/apart5_3.jpg';
import img5_4 from '../img/../img/apart5_4.jpg';
import img6_1 from '../img/../img/apart6_1.jpg';
import img6_2 from '../img/../img/apart6_2.jpg';
import img6_3 from '../img/../img/apart6_3.jpg';
import img6_4 from '../img/../img/apart6_4.jpg';
import img7_1 from '../img/../img/apart7_1.jpg';
import img7_2 from '../img/../img/apart7_2.jpg';
import img7_3 from '../img/../img/apart7_3.jpg';
import img7_4 from '../img/../img/apart7_4.jpg';
import img8_1 from '../img/../img/apart8_1.jpg';
import img8_2 from '../img/../img/apart8_2.jpg';
import img8_3 from '../img/../img/apart8_3.jpg';
import img8_4 from '../img/../img/apart8_4.jpg';
import img9_1 from '../img/../img/apart9_1.jpg';
import img9_2 from '../img/../img/apart9_2.jpg';
import img9_3 from '../img/../img/apart9_3.jpg';
import img9_4 from '../img/../img/apart9_4.jpg';

export interface Idata {
  img: string;
  name: string;
  descriptions: string[];
  adress: string;
  photos: string[];
  galerySetting: [string, string];
  photosSetting: [string, string][];
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
    photosSetting: [
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
    ],
    galerySetting: ['-220rem 0rem', '-400rem 0rem'],
  },
  {
    img: img2_3,
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
    photosSetting: [
      ['', ''],
      ['', ''],
      ['', ''],
      ['0rem -220rem ', '0rem -800rem'],
    ],
    galerySetting: ['-130rem 0rem', '-200rem 0rem'],
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
    photosSetting: [
      ['', ''],
      ['', ''],
      ['0rem -250rem', '0rem -900rem'],
      ['', ''],
    ],
    galerySetting: ['-150rem 0rem', '-300rem 0rem'],
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
    photosSetting: [
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
    ],
    galerySetting: ['-140rem 0rem', '-270rem 0rem'],
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
    photosSetting: [
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
    ],
    galerySetting: ['-170rem 0rem', '-250rem 0rem'],
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
    photosSetting: [
      ['', ''],
      ['', ''],
      ['', ''],
      ['0rem -140rem', '0rem -500rem'],
    ],
    galerySetting: ['-170rem 0rem', '-250rem 0rem'],
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
    photosSetting: [
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
    ],
    galerySetting: ['-170rem 0rem', '-250rem 0rem'],
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
    photosSetting: [
      ['', ''],
      ['', ''],
      ['', ''],
      ['0rem -220rem', '0rem -900rem'],
    ],
    galerySetting: ['-140rem 0rem', '-280rem 0rem'],
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
    photosSetting: [
      ['', ''],
      ['', ''],
      ['', ''],
      ['', ''],
    ],
    galerySetting: ['-10rem 0rem', '-20rem 0rem'],
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
            className="h-[100vh] w-[100vw] grid items-center place-content-center z-[1000] fixed bg-[#000000]/[0.8] backdrop-blur-[4px]"
          >
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
