import { Dispatch, SetStateAction } from 'react';
import SliderPopup from '../components/SliderPopup';
import Apart from '../components/Apart';
import { Idata } from '../App';

interface GaleryProps {
  setActivePopup: Dispatch<SetStateAction<boolean>>;
  setActiveSlider: Dispatch<SetStateAction<number>>;
  data: Idata[];
}

function Galery(props: GaleryProps) {
  return (
    <div id="galery" className="mx-[20rem] lg:mx-0 mb-[61rem] lg:mb-[163rem] ">
      <div className="z-1 font-font1 font-[900] text-[80rem] leading-[95rem] lg:text-[160rem] lg:leading-[191rem] text-[#755E422B]/[0.17] lg:mb-[30rem] mb-[25rem]">
        Галерея
      </div>
      <div className="z-0 grid grid-cols-3 grid-rows-3 gap-[4rem] lg:gap-[20rem]">
        {props.data.map((e, i) => {
          return (
            <div onClick={() => props.setActiveSlider(i)} key={i} className="cursor-pointer">
              <Apart setActivePopup={props.setActivePopup} items={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Galery;
