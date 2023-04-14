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
		<div id="about" className="lg:mb-[143rem] lg:flex lg:flex-row lg:gap-[175rem]">
			<div className="lg:text-white">
				<div className="lg:flex lg:flex-row lg:items-center lg:gap-[50rem] lg:mb-[24rem]">
					<div className="lg:font1 lg:font-[700] lg:text-[60rem] lg:leading-[57rem]">
						Deluxe Apart{' '}
					</div>
					<div className="lg:font1 lg:font-[700] lg:text-[60rem] lg:leading-[57rem] text-white">
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
				<div className="lg:w-[550rem] lg:font2 lg:font-[400] lg:text-[24rem] lg:leading-[30rem] lg:text-[#C4C4C4]">
					Студия, в которой найдется квартира для Вас на любой вкус. Все апартаменты находятся в
					самом сердце г. Бреста. Мы предлагаем Вам все удобства, необходимые для проживания как на
					короткий, так и на длительный срок.
				</div>
			</div>
			<div className="lg:flex lg:flex-row lg:gap-[32rem]">
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
