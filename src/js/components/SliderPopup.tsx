import { useState, Dispatch, SetStateAction } from 'react'

interface ApartProps {
  img?: string,
  name?: string
  setActivePopup: Dispatch<SetStateAction<boolean>>
}

function SliderPopup(props: ApartProps) {

  return (
    <div onClick={() =>props.setActivePopup(false)} id='popup' className={`text-[20rem] text-white position z-[1000] w-[1030rem] h-[605rem] bg-black relative bg-cover bg-no-repeat`}>
      <div>asfasf</div>
    </div>
  )
}

export default SliderPopup