function ContactInfo() {
	return (
		<div
			id="contact"
			className="mx-[20rem] w-[374rem] h-[313rem] border-[2rem] lg:mx-auto lg:w-[834rem] lg:h-[540rem] lg:border-[3rem] border-[#925E10] flex flex-col items-center justify-center lg:mb-[147rem] mb-[61rem]">
			<div className="font-font1 font-[700] text-[30rem] leading-[45rem] lg:font-[900] lg:text-[68rem] lg:leading-[102.14rem] text-white lg:mb-[35rem] mb-[41rem]">
				Свяжитесь с нами
			</div>
			<div className="mb-[41rem] lg:mb-[81rem]">
				<svg
					width="64"
					height="2"
					viewBox="0 0 64 2"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<line y1="1" x2="64" y2="1" stroke="#925E10" strokeWidth="2" />
				</svg>
			</div>
			<div className="flex flex-row gap-[7rem] lg:gap-[32rem] items-center lg:mb-[43rem] mb-[17rem]">
				<div>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M18.4431 23.9998C13.5536 23.9934 8.86624 22.0444 5.40886 18.5802C1.95148 15.1159 0.00633762 10.4192 0 5.52006C0 4.05608 0.580409 2.65207 1.61354 1.61688C2.64668 0.581699 4.04791 0.000137152 5.50898 0.000137152C5.81837 -0.00222417 6.12724 0.0259108 6.43114 0.0841358C6.72492 0.127696 7.01373 0.200042 7.29341 0.300133C7.49012 0.369287 7.6654 0.48869 7.80193 0.646534C7.93845 0.804379 8.0315 0.995197 8.07185 1.20012L9.71257 8.40001C9.7568 8.59545 9.75147 8.79886 9.69708 8.9917C9.64269 9.18455 9.54097 9.36067 9.4012 9.504C9.24551 9.672 9.23353 9.684 7.76048 10.452C8.94011 13.045 11.0098 15.1273 13.5928 16.3199C14.3713 14.8319 14.3832 14.8199 14.5509 14.6639C14.6939 14.5239 14.8697 14.4219 15.0622 14.3674C15.2546 14.313 15.4576 14.3076 15.6527 14.3519L22.8383 15.9959C23.0363 16.0419 23.2193 16.1377 23.3702 16.2741C23.521 16.4106 23.6347 16.5833 23.7006 16.7759C23.8017 17.0607 23.8778 17.3538 23.9281 17.6519C23.9763 17.9535 24.0004 18.2584 24 18.5639C23.9779 20.0216 23.3812 21.4113 22.3401 22.4298C21.299 23.4482 19.898 24.0126 18.4431 23.9998Z"
							fill="white"
						/>
					</svg>
				</div>
				<div className="font-font2 font-[500] text-[16rem] leading-[24rem] lg:text-[28rem] lg:leading-[42rem] text-[#C4C4C4]">
					+375(29)221-00-00 Ксения
				</div>
			</div>
			<div className="flex flex-row gap-[7rem] lg:gap-[27rem] items-center">
				<div>
					<svg
						width="30"
						height="24"
						viewBox="0 0 30 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M30 6.912V19.125C30.0001 20.3702 29.5237 21.5682 28.6685 22.4733C27.8133 23.3785 26.6442 23.922 25.401 23.9925L25.125 24H4.875C3.62979 24.0001 2.43176 23.5237 1.52665 22.6685C0.62155 21.8133 0.077998 20.6442 0.00750017 19.401L0 19.125V6.912L14.478 14.496C14.6391 14.5804 14.8182 14.6244 15 14.6244C15.1818 14.6244 15.3609 14.5804 15.522 14.496L30 6.912ZM4.875 3.54076e-08H25.125C26.3334 -0.000145522 27.4987 0.448493 28.3951 1.2589C29.2914 2.06931 29.8548 3.18372 29.976 4.386L15 12.231L0.024 4.386C0.140285 3.23147 0.664575 2.15628 1.50262 1.35369C2.34067 0.551113 3.43752 0.0737805 4.596 0.00750021L4.875 3.54076e-08Z"
							fill="white"
						/>
					</svg>
				</div>
				<div className="font-font2 font-[500] text-[16rem] leading-[24rem] lg:text-[28rem] lg:leading-[42rem] text-[#C4C4C4]">
					kvartirylux.brest@gmail.com
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
