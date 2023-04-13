import { useState, Dispatch, SetStateAction } from 'react'

interface ApartProps {
  items: {
    img: string,
    name: string,
  },
  setActivePopup: Dispatch<SetStateAction<boolean>>
}

function Apart(props: ApartProps) {
  const {items, setActivePopup} = props

  return (
    <div onClick={() =>setActivePopup(true)} className={`w-[400rem] h-[304rem] relative bg-cover bg-no-repeat`}
    style={{backgroundImage: `url(${items.img})`}}>
      <div className='bg-[#A1A1A1CC]/[0.8] w-[200rem] h-[54rem] absolute left-0 bottom-0 text-[22rem] text-[#171717] font1 font-[700] leading-[21rem] flex items-center justify-center'>{items.name}</div>
    </div>
  )
}

export default Apart