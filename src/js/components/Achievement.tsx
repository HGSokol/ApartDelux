interface AchievProps {
	number: string;
	name: string;
}

function Achievement(props: AchievProps) {
	return (
		<div className="w-[177rem] h-[164rem] lg:w-[163rem] lg:h-[151rem] border-[1rem] border-[#925E10] text-[white] pt-[22rem] pb-[30rem] lg:pt-[32rem] lg:pb-[27rem] flex flex-col items-center">
			<div className="flex flex-row items-baseline">
				<div className="font-font1 font-[700] text-[50rem] leadng-[61rem] lg:text-[50rem] lg:leading-[58rem]">
					{`${props.number}+`}
				</div>
			</div>
			<div className="font-font2 font-[400] text-[20rem] leading-[24rem] text-[#C4C4C4]">
				{props.name}
			</div>
		</div>
	);
}

export default Achievement;
