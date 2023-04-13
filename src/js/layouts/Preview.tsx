import Achievement from '../components/Achievement'


function Preview() {
  const achievement = [
    {
      number: '9',
      name: 'Квартир'
    },
    {
      number: '109',
      name: 'Клиентов'
    },
  ]

  return (
    <div id='about' className="mb-[143rem] flex flex-row gap-[175rem]">
      <div className='text-white'>
        <div className='flex flex-row items-center gap-[50rem] mb-[24rem]'>
          <div className='font1 font-[700] text-[60rem] leading-[57rem]'>Deluxe Apart </div>
          <div className='font1 font-[700] text-[60rem] leading-[57rem] text-white'>
            <svg width="56" height="1" viewBox="0 0 56 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="56" y2="0.5" stroke="white"/>
            </svg>
          </div>
        </div>
        <div className='w-[550rem] font2 font-[400] text-[24rem] leading-[30rem] text-[#C4C4C4]'>Студия, в которой найдется квартира для Вас на любой вкус. Все апартаменты находятся в самом сердце г. Бреста. Мы предлагаем Вам все удобства, необходимые для проживания как на короткий, так и на длительный срок.</div>
      </div>
      <div className='flex flex-row gap-[32rem]'>
      {
        achievement.map((e,i) => {
          return(
            <div key={i}>
              <Achievement number={e.number} name={e.name}/>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Preview