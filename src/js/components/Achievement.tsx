
interface AchievProps {
  number:string
  name:string,
}

function Achievement(props: AchievProps) {

  return (
    <div className="w-[163rem] h-[151rem] border-[1rem] border-[#925E10] text-[white] pt-[32rem] pb-[27rem] flex flex-col items-center">
      <div className='flex flex-row items-center'>
        <div className='font1 font-[700] text-[50rem] leading-[58rem]'>{props.number}</div>
        <div className='font1 font-[400] text-[50rem] leading-[58rem]'>+</div>
      </div>
      <div className='font2 font-[400] text-[20rem] leading-[24rem] text-[#C4C4C4]'>{props.name}</div>
    </div>
  )
}

export default Achievement