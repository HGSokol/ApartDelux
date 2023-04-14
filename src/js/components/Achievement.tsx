interface AchievProps {
	number: string;
	name: string;
}

function Achievement(props: AchievProps) {
	return (
		<div className="lg:w-[163rem] lg:h-[151rem] lg:border-[1rem] lg:border-[#925E10] lg:text-[white] lg:pt-[32rem] lg:pb-[27rem] lg:flex lg:flex-col lg:items-center">
			<div className="lg:flex lg:flex-row lg:items-center">
				<div className="lg:font1 lg:font-[700] lg:text-[50rem] lg:leading-[58rem]">
					{props.number}
				</div>
				<div className="lg:font1 lg:font-[400] lg:text-[50rem] lg:leading-[58rem]">+</div>
			</div>
			<div className="lg:font2 lg:font-[400] lg:text-[20rem] lg:leading-[24rem] lg:text-[#C4C4C4]">
				{props.name}
			</div>
		</div>
	);
}

export default Achievement;
