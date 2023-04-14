import Achievement from '../components/Achievement';

function Preview() {
	const achievement = [
		{
			number: '9',
			name: 'Квартир',
		},
		{
			number: '109',
			name: 'Клиентов',
		},
	];

	return (
		<div
			id="about"
			className="mx-[20rem] lg:mx-0 mb-[77rem] lg:mb-[143rem] flex flex-col lg:flex-row lg:gap-[175rem]">
			<div className="text-white">
				<div className="flex flex-row items-center lg:gap-[50rem] lg:mb-[24rem] mb-[25rem]">
					<div className="font1 font-[700] text-[44rem] leading-[42rem] lg:text-[60rem] lg:leading-[57rem]">
						Deluxe Apart{' '}
					</div>
					<div className="hidden lg:font1 lg:font-[700] lg:text-[60rem] lg:leading-[57rem] text-white">
						<svg
							width="56"
							height="1"
							viewBox="0 0 56 1"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<line y1="0.5" x2="56" y2="0.5" stroke="white" />
						</svg>
					</div>
				</div>
				<div className="lg:w-[550rem] mb-[43rem] lg:mb-0 font2 font-[400] text-[20rem] leading-[25rem] lg:text-[24rem] lg:leading-[30rem] text-[#C4C4C4]">
					Студия, в которой найдется квартира для Вас на любой вкус. Все апартаменты находятся в
					самом сердце г. Бреста. Мы предлагаем Вам все удобства, необходимые для проживания как на
					короткий, так и на длительный срок.
				</div>
			</div>
			<div className="flex flex-row gap-[20rem] lg:gap-[32rem]">
				{achievement.map((e, i) => {
					return (
						<div key={i}>
							<Achievement number={e.number} name={e.name} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Preview;
