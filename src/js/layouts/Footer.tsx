function Footer() {
	return (
		<div className="lg:h-[264rem] lg:bg-[#C4C4C429]/[0.16] lg:pt-[70rem] lg:px-[100rem] lg:text-white lg:flex lg:flex-row lg:justify-between">
			<div className="lg:flex lg:flex-col lg:text-left">
				<div className="lg:mb-[81rem] lg:font2 lg:font-[600] lg:text-[24rem] lg:leading-[36rem]">
					Deluxe Apart
				</div>
				<div className="lg:font2 lg:font-[400] lg:text-[18rem] lg:leading-[27rem]">
					Локация: Беларусь, Брест
				</div>
			</div>
			<div className="lg:flex lg:flex-col lg:text-center">
				<div className="lg:mb-[31rem] lg:font2 lg:font-[600] lg:text-[20rem] lg:leading-[30rem]">
					СОЦИАЛЬНЫЕ СЕТИ
				</div>
				<div className="lg:flex lg:flex-row lg:gap-[32rem] lg:text-red-400 lg:text-[26rem] lg:justify-center lg:items-center">
					<div className="lg:text-[26rem] lg:text-[#A1A1A1] lg:w-[23rem] lg:h-[23rem]">
						<svg fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M7.26458 0.0699456C8.5077 0.0127174 8.90406 0 12.0707 0C15.2373 0 15.6337 0.0137772 16.8757 0.0699456C18.1178 0.126114 18.9656 0.324293 19.7075 0.611495C20.4843 0.905054 21.1891 1.36394 21.7719 1.95742C22.3654 2.53924 22.8232 3.24293 23.1157 4.02081C23.404 4.76266 23.6011 5.61049 23.6584 6.85043C23.7156 8.09568 23.7283 8.49204 23.7283 11.6576C23.7283 14.8242 23.7145 15.2206 23.6584 16.4637C23.6022 17.7037 23.404 18.5515 23.1157 19.2933C22.8232 20.0713 22.3647 20.7762 21.7719 21.3589C21.1891 21.9523 20.4843 22.4102 19.7075 22.7027C18.9656 22.9909 18.1178 23.188 16.8779 23.2453C15.6337 23.3025 15.2373 23.3152 12.0707 23.3152C8.90406 23.3152 8.5077 23.3014 7.26458 23.2453C6.02463 23.1891 5.17681 22.9909 4.43496 22.7027C3.657 22.4101 2.95213 21.9515 2.36944 21.3589C1.77637 20.7767 1.31741 20.0722 1.02458 19.2944C0.737379 18.5526 0.54026 17.7047 0.483032 16.4648C0.425803 15.2195 0.413086 14.8232 0.413086 11.6576C0.413086 8.49098 0.426863 8.09462 0.483032 6.85255C0.5392 5.61049 0.737379 4.76266 1.02458 4.02081C1.31785 3.24302 1.77715 2.53851 2.3705 1.95636C2.95237 1.36341 3.65652 0.904464 4.4339 0.611495C5.17575 0.324293 6.02357 0.127174 7.26352 0.0699456H7.26458ZM16.7814 2.16831C15.5521 2.11215 15.1833 2.10049 12.0707 2.10049C8.95811 2.10049 8.58931 2.11215 7.35996 2.16831C6.22281 2.22024 5.60602 2.40995 5.19482 2.56997C4.65116 2.78193 4.26222 3.0331 3.8542 3.44111C3.46743 3.81739 3.16977 4.27546 2.98306 4.78174C2.82303 5.19293 2.63333 5.80973 2.5814 6.94687C2.52523 8.17622 2.51358 8.54503 2.51358 11.6576C2.51358 14.7702 2.52523 15.139 2.5814 16.3683C2.63333 17.5055 2.82303 18.1223 2.98306 18.5335C3.16958 19.039 3.46738 19.4979 3.8542 19.8741C4.23042 20.2609 4.68931 20.5587 5.19482 20.7452C5.60602 20.9053 6.22281 21.095 7.35996 21.1469C8.58931 21.2031 8.95705 21.2147 12.0707 21.2147C15.1843 21.2147 15.5521 21.2031 16.7814 21.1469C17.9186 21.095 18.5354 20.9053 18.9466 20.7452C19.4902 20.5333 19.8792 20.2821 20.2872 19.8741C20.674 19.4979 20.9718 19.039 21.1583 18.5335C21.3184 18.1223 21.5081 17.5055 21.56 16.3683C21.6162 15.139 21.6278 14.7702 21.6278 11.6576C21.6278 8.54503 21.6162 8.17622 21.56 6.94687C21.5081 5.80973 21.3184 5.19293 21.1583 4.78174C20.9464 4.23807 20.6952 3.84913 20.2872 3.44111C19.9109 3.05437 19.4528 2.75672 18.9466 2.56997C18.5354 2.40995 17.9186 2.22024 16.7814 2.16831ZM10.5817 15.2513C11.4133 15.5975 12.3392 15.6442 13.2014 15.3835C14.0636 15.1228 14.8085 14.5709 15.309 13.8219C15.8094 13.073 16.0343 12.1736 15.9453 11.2773C15.8563 10.3809 15.4588 9.54331 14.8208 8.90747C14.4141 8.50102 13.9224 8.1898 13.3809 7.99621C12.8395 7.80263 12.2619 7.7315 11.6897 7.78793C11.1175 7.84437 10.5649 8.02698 10.0717 8.32261C9.57857 8.61824 9.15708 9.01954 8.83762 9.49761C8.51816 9.97569 8.30867 10.5186 8.22423 11.0874C8.13979 11.6562 8.18251 12.2366 8.34931 12.7868C8.51611 13.3371 8.80283 13.8435 9.18885 14.2697C9.57486 14.6958 10.0506 15.0311 10.5817 15.2513ZM7.83368 7.4206C8.3901 6.86418 9.05065 6.42281 9.77764 6.12169C10.5046 5.82056 11.2838 5.66557 12.0707 5.66557C12.8576 5.66557 13.6368 5.82056 14.3637 6.12169C15.0907 6.42281 15.7513 6.86418 16.3077 7.4206C16.8641 7.97701 17.3055 8.63757 17.6066 9.36455C17.9077 10.0915 18.0627 10.8707 18.0627 11.6576C18.0627 12.4445 17.9077 13.2237 17.6066 13.9507C17.3055 14.6776 16.8641 15.3382 16.3077 15.8946C15.184 17.0183 13.6599 17.6496 12.0707 17.6496C10.4815 17.6496 8.95741 17.0183 7.83368 15.8946C6.70996 14.7709 6.07866 13.2468 6.07866 11.6576C6.07866 10.0684 6.70996 8.54432 7.83368 7.4206ZM19.3917 6.55793C19.5296 6.42787 19.6399 6.27145 19.7163 6.09796C19.7926 5.92447 19.8334 5.73742 19.8362 5.54789C19.8389 5.35836 19.8036 5.1702 19.7324 4.99455C19.6611 4.81891 19.5553 4.65935 19.4213 4.52531C19.2873 4.39128 19.1277 4.2855 18.9521 4.21424C18.7764 4.14298 18.5883 4.10769 18.3987 4.11045C18.2092 4.11322 18.0222 4.15398 17.8487 4.23033C17.6752 4.30668 17.5187 4.41706 17.3887 4.55494C17.1357 4.8231 16.9972 5.17929 17.0026 5.54789C17.008 5.91649 17.1568 6.26849 17.4175 6.52915C17.6781 6.78982 18.0301 6.93864 18.3987 6.94401C18.7673 6.94939 19.1235 6.81089 19.3917 6.55793Z"
								fill="#FFFFFF"
							/>
						</svg>
					</div>
					<div className="lg:text-[26rem] lg:text-[#A1A1A1] lg:w-[23rem] lg:h-[20rem]">
						<svg fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.3713 0.00204778C20.0996 0.0220537 19.8329 0.0865647 19.5816 0.193064H19.5783C19.3371 0.289857 18.1903 0.778105 16.4468 1.51819L10.199 4.18128C5.71592 6.09145 1.30899 7.97249 1.30899 7.97249L1.36146 7.95193C1.36146 7.95193 1.05762 8.053 0.740242 8.27314C0.544167 8.39942 0.375444 8.56465 0.244282 8.75882C0.0885538 8.9901 -0.0367058 9.34386 0.0098434 9.70962C0.0860148 10.3281 0.482106 10.699 0.766479 10.9037C1.05424 11.111 1.32845 11.2078 1.32845 11.2078H1.33522L5.46794 12.6168C5.65329 13.219 6.72731 16.7926 6.98545 17.6158C7.13779 18.1075 7.2859 18.415 7.47125 18.6497C7.56096 18.7696 7.66591 18.8698 7.79202 18.9504C7.85757 18.989 7.92747 19.0194 8.00022 19.0412L7.9579 19.0309C7.97059 19.0343 7.98075 19.0446 7.99006 19.048C8.02392 19.0574 8.04677 19.0609 8.08993 19.0677C8.74416 19.2682 9.26974 18.857 9.26974 18.857L9.29936 18.833L11.7394 16.5845L15.8289 19.7598L15.922 19.8001C16.7743 20.1787 17.6376 19.968 18.0938 19.5962C18.5533 19.2219 18.7319 18.7431 18.7319 18.7431L18.7615 18.666L21.9218 2.28054C22.0115 1.87624 22.0344 1.49763 21.9353 1.13016C21.8332 0.758255 21.5975 0.438394 21.2743 0.233323C21.003 0.0663893 20.6884 -0.0141856 20.3713 0.00204778ZM20.2858 1.75803C20.2824 1.81199 20.2926 1.806 20.2689 1.90964V1.91906L17.1382 18.134C17.1247 18.1572 17.1018 18.2077 17.0392 18.2583C16.9732 18.3114 16.9207 18.3448 16.6457 18.2343L11.6437 14.3531L8.62228 17.1404L9.25704 13.0374L17.4294 5.32824C17.7662 5.0113 17.6537 4.94449 17.6537 4.94449C17.6774 4.5556 17.145 4.83057 17.145 4.83057L6.83987 11.2917L6.83649 11.2746L1.8972 9.59141V9.58799L1.88451 9.58542C1.89316 9.58251 1.90164 9.57908 1.9099 9.57514L1.93698 9.56143L1.96322 9.55201C1.96322 9.55201 6.37354 7.67097 10.8566 5.76081C13.1012 4.80401 15.3626 3.84036 17.1018 3.09686C18.8411 2.35763 20.1267 1.81542 20.1995 1.7863C20.2689 1.75888 20.2359 1.75888 20.2858 1.75888V1.75803Z"
								fill="#FFFFFF"
							/>
						</svg>
					</div>
					<div className="lg:text-[26rem] lg:text-[#925E10] lg:w-[23rem] lg:h-[23rem]">
						<svg fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M11.5 0C5.15967 0 0 5.15967 0 11.5C0 17.8403 5.15967 23 11.5 23C17.8403 23 23 17.8403 23 11.5C23 5.15967 17.8403 0 11.5 0ZM11.5 1.91667C16.8044 1.91667 21.0833 6.19562 21.0833 11.5C21.0857 13.7942 20.263 16.0128 18.7655 17.7508C17.2679 19.4889 15.1953 20.6305 12.926 20.9674V14.2945H15.6553L16.0837 11.522H12.926V10.0079C12.926 8.85787 13.3045 7.83533 14.3808 7.83533H16.1105V5.4165C15.8068 5.37529 15.1637 5.28617 13.9485 5.28617C11.4109 5.28617 9.92354 6.62592 9.92354 9.67917V11.522H7.31496V14.2945H9.92354V20.9434C7.68559 20.5751 5.65152 19.423 4.18475 17.6931C2.71797 15.9632 1.91407 13.7681 1.91667 11.5C1.91667 6.19562 6.19562 1.91667 11.5 1.91667Z"
								fill="#925E10"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className="lg:flex lg:flex-col lg:text-right">
				<div className="lg:mb-[32rem] lg:font2 lg:font-[600] lg:text-[20rem] lg:leading-[30rem]">
					КОНТАКТ
				</div>
				<div className="lg:mb-[22rem] lg:font2 lg:font-[400] lg:text-[18rem] lg:leading-[27rem]">
					+375(29)221-00-00
				</div>
				<div className="lg:font2 lg:font-[400] lg:text-[18rem] lg:leading-[27rem]">
					kvartirylux.brest@gmail.com
				</div>
			</div>
		</div>
	);
}

export default Footer;
