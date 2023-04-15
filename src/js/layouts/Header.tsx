import { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { HiArrowLongRight } from 'react-icons/hi2';

function Header() {
	const [openMenu, setOpenMenu] = useState(false);

	const closeBurger = (e) => {
		const target = e.target as HTMLButtonElement;
		console.log(target);

		if (target.matches('#burgerCl')) {
			setOpenMenu(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', closeBurger);
		return () => {
			document.removeEventListener('click', closeBurger);
		};
	}, []);

	if (openMenu) {
		document.body.classList.add('active-burger');
	} else {
		document.body.classList.remove('active-burger');
	}

	return (
		<div className="transition duration-[400ms] relative h-[677rem] lg:h-[770rem] lg:flex lg:flex-row lg:relative lg:mb-[299rem] mb-[73rem]">
			{openMenu ? (
				<div id="burgerCl" className="absolute h-[100vh] w-[100vw] bg-[#000000]/[0.8]">
					<div className="transition duration-300 absolute w-[341rem] h-[365rem] bg-[#393939] top-0 left-0 pt-[31rem] px-[41rem] flex flex-col lg:hidden ">
						<div className="flex flex-row justify-between text-center">
							<div className="font-font-font1 font-[700] text-[20rem] leading-[30rem] text-white mb-[53rem]">
								Deluxe Apart
							</div>
							<div onClick={() => setOpenMenu(false)} className="pt-[8rem] duration-[400ms]">
								<RxCross2
									style={{
										width: '18rem',
										height: '18rem',
										color: 'white',
									}}
								/>
							</div>
						</div>
						<div className="flex flex-col border-b-[1rem] border-[#925E10] w-[103rem] mb-[25rem]">
							<a
								onClick={() => setOpenMenu(false)}
								href="#galery"
								className="mb-[10rem] font-font-font2 font-[900] text-[22rem] leading-[31rem] text-[#A1A1A1CC]/[0.8]">
								Галерея
							</a>
							<a
								onClick={() => setOpenMenu(false)}
								href="#about"
								className="mb-[10rem] font-font2 font-[500] text-[22rem] leading-[31rem] text-white">
								О нас
							</a>
							<a
								onClick={() => setOpenMenu(false)}
								href="#contact"
								className="pb-[25rem] font-font2 font-[900] text-[22rem] leading-[31rem] text-white">
								Контакты
							</a>
						</div>
						<div className="flex flex-row gap-[26rem]">
							<div>
								<svg
									width="17"
									height="17"
									viewBox="0 0 17 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4.94309 0.0504966C5.83996 0.00918118 6.12591 0 8.41052 0C10.6951 0 10.9811 0.00994628 11.8772 0.0504966C12.7733 0.0910468 13.385 0.23412 13.9202 0.441462C14.4806 0.653395 14.9891 0.984683 15.4096 1.41314C15.8378 1.83318 16.1681 2.3412 16.3791 2.90279C16.5871 3.43836 16.7293 4.05044 16.7706 4.9456C16.8119 5.84459 16.821 6.13074 16.821 8.41609C16.821 10.7022 16.8111 10.9884 16.7706 11.8858C16.73 12.781 16.5871 13.3931 16.3791 13.9286C16.1681 14.4903 15.8372 14.9992 15.4096 15.4198C14.9891 15.8483 14.4806 16.1788 13.9202 16.39C13.385 16.5981 12.7733 16.7404 11.8787 16.7817C10.9811 16.823 10.6951 16.8322 8.41052 16.8322C6.12591 16.8322 5.83996 16.8222 4.94309 16.7817C4.04852 16.7411 3.43684 16.5981 2.90163 16.39C2.34036 16.1788 1.83183 15.8477 1.41144 15.4198C0.983556 14.9995 0.652438 14.4909 0.44117 13.9294C0.233965 13.3938 0.0917511 12.7818 0.0504631 11.8866C0.0091751 10.9876 0 10.7014 0 8.41609C0 6.12998 0.00993969 5.84383 0.0504631 4.94713C0.0909865 4.05044 0.233965 3.43836 0.44117 2.90279C0.65275 2.34127 0.984121 1.83265 1.4122 1.41237C1.83199 0.984301 2.34001 0.652969 2.90086 0.441462C3.43608 0.23412 4.04775 0.0918119 4.94233 0.0504966H4.94309ZM11.8091 1.56539C10.9222 1.52484 10.6561 1.51643 8.41052 1.51643C6.16491 1.51643 5.89883 1.52484 5.0119 1.56539C4.19149 1.60288 3.7465 1.73984 3.44984 1.85537C3.0576 2.00839 2.777 2.18971 2.48263 2.48428C2.20359 2.75593 1.98884 3.08663 1.85414 3.45213C1.73868 3.74899 1.60182 4.19428 1.56436 5.01523C1.52383 5.90274 1.51542 6.169 1.51542 8.41609C1.51542 10.6632 1.52383 10.9294 1.56436 11.817C1.60182 12.6379 1.73868 13.0832 1.85414 13.3801C1.9887 13.745 2.20356 14.0763 2.48263 14.3479C2.75406 14.6272 3.08513 14.8422 3.44984 14.9768C3.7465 15.0924 4.19149 15.2293 5.0119 15.2668C5.89883 15.3073 6.16414 15.3158 8.41052 15.3158C10.6569 15.3158 10.9222 15.3073 11.8091 15.2668C12.6295 15.2293 13.0745 15.0924 13.3712 14.9768C13.7634 14.8238 14.044 14.6425 14.3384 14.3479C14.6175 14.0763 14.8323 13.745 14.9669 13.3801C15.0823 13.0832 15.2192 12.6379 15.2567 11.817C15.2972 10.9294 15.3056 10.6632 15.3056 8.41609C15.3056 6.169 15.2972 5.90274 15.2567 5.01523C15.2192 4.19428 15.0823 3.74899 14.9669 3.45213C14.814 3.05963 14.6328 2.77884 14.3384 2.48428C14.0669 2.20507 13.7364 1.99018 13.3712 1.85537C13.0745 1.73984 12.6295 1.60288 11.8091 1.56539ZM7.33626 11.0105C7.93621 11.2605 8.60425 11.2942 9.22628 11.106C9.84832 10.9178 10.3858 10.5193 10.7468 9.97861C11.1079 9.43794 11.2701 8.7886 11.2059 8.1415C11.1417 7.49441 10.8549 6.8897 10.3946 6.43066C10.1012 6.13723 9.74642 5.91254 9.35581 5.77279C8.96519 5.63303 8.54847 5.58168 8.13564 5.62242C7.72281 5.66317 7.32415 5.795 6.96834 6.00843C6.61254 6.22185 6.30846 6.51157 6.07798 6.85671C5.8475 7.20185 5.69636 7.59383 5.63544 8.00444C5.57452 8.41505 5.60534 8.83406 5.72568 9.23132C5.84602 9.62858 6.05288 9.9942 6.33138 10.3019C6.60987 10.6095 6.95307 10.8515 7.33626 11.0105ZM5.35368 5.35723C5.75511 4.95553 6.23167 4.63689 6.75617 4.41949C7.28066 4.20209 7.84281 4.0902 8.41052 4.0902C8.97822 4.0902 9.54037 4.20209 10.0649 4.41949C10.5894 4.63689 11.0659 4.95553 11.4674 5.35723C11.8688 5.75892 12.1872 6.23581 12.4045 6.76065C12.6217 7.28549 12.7335 7.84801 12.7335 8.41609C12.7335 8.98418 12.6217 9.5467 12.4045 10.0715C12.1872 10.5964 11.8688 11.0733 11.4674 11.475C10.6566 12.2862 9.55705 12.742 8.41052 12.742C7.26398 12.742 6.1644 12.2862 5.35368 11.475C4.54295 10.6637 4.08749 9.56339 4.08749 8.41609C4.08749 7.2688 4.54295 6.16849 5.35368 5.35723ZM13.6923 4.73444C13.7918 4.64053 13.8714 4.52761 13.9265 4.40236C13.9816 4.27711 14.011 4.14207 14.013 4.00524C14.015 3.86841 13.9895 3.73257 13.9381 3.60577C13.8867 3.47896 13.8104 3.36377 13.7137 3.267C13.617 3.17024 13.5019 3.09388 13.3752 3.04243C13.2484 2.99099 13.1127 2.96551 12.976 2.9675C12.8392 2.9695 12.7043 2.99893 12.5791 3.05404C12.4539 3.10916 12.3411 3.18885 12.2472 3.2884C12.0647 3.48199 11.9648 3.73913 11.9687 4.00524C11.9726 4.27135 12.0799 4.52547 12.268 4.71366C12.4561 4.90184 12.71 5.00928 12.976 5.01316C13.2419 5.01704 13.4989 4.91706 13.6923 4.73444Z"
										fill="white"
									/>
								</svg>
							</div>
							<div>
								<svg
									width="20"
									height="17"
									viewBox="0 0 20 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M17.9544 0.00172343C17.7258 0.0185606 17.5016 0.0728537 17.2902 0.162484H17.2874C17.0845 0.243946 16.12 0.654861 14.6536 1.27772L9.39896 3.51901C5.62843 5.12662 1.92197 6.70972 1.92197 6.70972L1.9661 6.69242C1.9661 6.69242 1.71056 6.77748 1.44363 6.96276C1.27872 7.06903 1.13681 7.20809 1.0265 7.37151C0.895523 7.56615 0.790173 7.86388 0.829324 8.17171C0.893388 8.6922 1.22652 9.00435 1.46569 9.17665C1.70771 9.3511 1.93834 9.43257 1.93834 9.43257H1.94404L5.41987 10.6185C5.57576 11.1252 6.47906 14.1328 6.69617 14.8256C6.8243 15.2394 6.94886 15.4982 7.10475 15.6958C7.18021 15.7967 7.26847 15.881 7.37453 15.9488C7.42967 15.9813 7.48846 16.0069 7.54964 16.0252L7.51405 16.0166C7.52473 16.0195 7.53327 16.0281 7.5411 16.031C7.56957 16.0389 7.58879 16.0418 7.6251 16.0476C8.17534 16.2163 8.61738 15.8702 8.61738 15.8702L8.64229 15.85L10.6945 13.9577L14.134 16.6301L14.2123 16.6639C14.9291 16.9826 15.6552 16.8052 16.0388 16.4924C16.4254 16.1773 16.5756 15.7743 16.5756 15.7743L16.6005 15.7095L19.2584 1.91932C19.3339 1.57906 19.3531 1.26042 19.2698 0.951152C19.1839 0.638154 18.9856 0.368956 18.7139 0.196367C18.4857 0.0558739 18.2211 -0.0119387 17.9544 0.00172343ZM17.8825 1.47957C17.8796 1.52499 17.8882 1.51994 17.8682 1.60717V1.6151L15.2352 15.2618C15.2238 15.2812 15.2046 15.3238 15.1519 15.3663C15.0964 15.411 15.0523 15.4391 14.8209 15.3461L10.614 12.0797L8.07283 14.4255L8.6067 10.9724L15.4801 4.48429C15.7634 4.21756 15.6687 4.16133 15.6687 4.16133C15.6886 3.83404 15.2409 4.06545 15.2409 4.06545L6.57373 9.50322L6.57089 9.4888L2.41669 8.07222V8.06934L2.40601 8.06718C2.41329 8.06473 2.42042 8.06184 2.42737 8.05853L2.45014 8.04699L2.47221 8.03906C2.47221 8.03906 6.18152 6.45596 9.95205 4.84835C11.8398 4.0431 13.7418 3.23209 15.2046 2.60634C16.6674 1.9842 17.7486 1.52787 17.8099 1.50336C17.8682 1.48029 17.8405 1.47957 17.8825 1.47957Z"
										fill="white"
									/>
								</svg>
							</div>
							<div>
								<svg
									width="18"
									height="17"
									viewBox="0 0 18 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.73474 0C4.09774 0 0.324219 3.77602 0.324219 8.41609C0.324219 13.0562 4.09774 16.8322 8.73474 16.8322C13.3717 16.8322 17.1453 13.0562 17.1453 8.41609C17.1453 3.77602 13.3717 0 8.73474 0ZM8.73474 1.40268C12.6141 1.40268 15.7435 4.53417 15.7435 8.41609C15.7452 10.0951 15.1435 11.7187 14.0483 12.9907C12.9531 14.2626 11.4373 15.0981 9.77764 15.3446V10.4612H11.7737L12.087 8.43223H9.77764V7.32411C9.77764 6.4825 10.0545 5.73417 10.8416 5.73417H12.1067V3.96398C11.8845 3.93382 11.4142 3.8686 10.5255 3.8686C8.66956 3.8686 7.58179 4.84907 7.58179 7.08355V8.43223H5.67401V10.4612H7.58179V15.3271C5.94507 15.0575 4.45745 14.2144 3.38473 12.9484C2.31201 11.6824 1.72407 10.0759 1.72597 8.41609C1.72597 4.53417 4.85539 1.40268 8.73474 1.40268Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			) : null}
			<div className="hidden lg:z-40 lg:w-[85rem] lg:h-[772rem] lg:flex lg:flex-col lg:justify-between lg:pt-[60rem]">
				<div className="lg:relative mode lg:-rotate-180 lg:font-font1 lg:font-[700] lg:text-[26rem] lg:text-[#FFFFFF] lg:whitespace-nowrap">
					<div className="lg:absolute lg:-translate-y-[160rem] lg:translate-x-[14rem]">
						Deluxe Apart
					</div>
				</div>
				<div className="lg:flex lg:flex-col lg:gap-[32rem] lg:text-red-400 lg:text-[26rem]">
					<div className="lg:text-[26rem] lg:text-[#A1A1A1]">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M7.26458 0.0699456C8.5077 0.0127174 8.90406 0 12.0707 0C15.2373 0 15.6337 0.0137772 16.8757 0.0699456C18.1178 0.126114 18.9656 0.324293 19.7075 0.611495C20.4843 0.905054 21.1891 1.36394 21.7719 1.95742C22.3654 2.53924 22.8232 3.24293 23.1157 4.02081C23.404 4.76266 23.6011 5.61049 23.6584 6.85043C23.7156 8.09568 23.7283 8.49204 23.7283 11.6576C23.7283 14.8242 23.7145 15.2206 23.6584 16.4637C23.6022 17.7037 23.404 18.5515 23.1157 19.2933C22.8232 20.0713 22.3647 20.7762 21.7719 21.3589C21.1891 21.9523 20.4843 22.4102 19.7075 22.7027C18.9656 22.9909 18.1178 23.188 16.8779 23.2453C15.6337 23.3025 15.2373 23.3152 12.0707 23.3152C8.90406 23.3152 8.5077 23.3014 7.26458 23.2453C6.02463 23.1891 5.17681 22.9909 4.43496 22.7027C3.657 22.4101 2.95213 21.9515 2.36944 21.3589C1.77637 20.7767 1.31741 20.0722 1.02458 19.2944C0.737379 18.5526 0.54026 17.7047 0.483032 16.4648C0.425803 15.2195 0.413086 14.8232 0.413086 11.6576C0.413086 8.49098 0.426863 8.09462 0.483032 6.85255C0.5392 5.61049 0.737379 4.76266 1.02458 4.02081C1.31785 3.24302 1.77715 2.53851 2.3705 1.95636C2.95237 1.36341 3.65652 0.904464 4.4339 0.611495C5.17575 0.324293 6.02357 0.127174 7.26352 0.0699456H7.26458ZM16.7814 2.16831C15.5521 2.11215 15.1833 2.10049 12.0707 2.10049C8.95811 2.10049 8.58931 2.11215 7.35996 2.16831C6.22281 2.22024 5.60602 2.40995 5.19482 2.56997C4.65116 2.78193 4.26222 3.0331 3.8542 3.44111C3.46743 3.81739 3.16977 4.27546 2.98306 4.78174C2.82303 5.19293 2.63333 5.80973 2.5814 6.94687C2.52523 8.17622 2.51358 8.54503 2.51358 11.6576C2.51358 14.7702 2.52523 15.139 2.5814 16.3683C2.63333 17.5055 2.82303 18.1223 2.98306 18.5335C3.16958 19.039 3.46738 19.4979 3.8542 19.8741C4.23042 20.2609 4.68931 20.5587 5.19482 20.7452C5.60602 20.9053 6.22281 21.095 7.35996 21.1469C8.58931 21.2031 8.95705 21.2147 12.0707 21.2147C15.1843 21.2147 15.5521 21.2031 16.7814 21.1469C17.9186 21.095 18.5354 20.9053 18.9466 20.7452C19.4902 20.5333 19.8792 20.2821 20.2872 19.8741C20.674 19.4979 20.9718 19.039 21.1583 18.5335C21.3184 18.1223 21.5081 17.5055 21.56 16.3683C21.6162 15.139 21.6278 14.7702 21.6278 11.6576C21.6278 8.54503 21.6162 8.17622 21.56 6.94687C21.5081 5.80973 21.3184 5.19293 21.1583 4.78174C20.9464 4.23807 20.6952 3.84913 20.2872 3.44111C19.9109 3.05437 19.4528 2.75672 18.9466 2.56997C18.5354 2.40995 17.9186 2.22024 16.7814 2.16831ZM10.5817 15.2513C11.4133 15.5975 12.3392 15.6442 13.2014 15.3835C14.0636 15.1228 14.8085 14.5709 15.309 13.8219C15.8094 13.073 16.0343 12.1736 15.9453 11.2773C15.8563 10.3809 15.4588 9.54331 14.8208 8.90747C14.4141 8.50102 13.9224 8.1898 13.3809 7.99621C12.8395 7.80263 12.2619 7.7315 11.6897 7.78793C11.1175 7.84437 10.5649 8.02698 10.0717 8.32261C9.57857 8.61824 9.15708 9.01954 8.83762 9.49761C8.51816 9.97569 8.30867 10.5186 8.22423 11.0874C8.13979 11.6562 8.18251 12.2366 8.34931 12.7868C8.51611 13.3371 8.80283 13.8435 9.18885 14.2697C9.57486 14.6958 10.0506 15.0311 10.5817 15.2513ZM7.83368 7.4206C8.3901 6.86418 9.05065 6.42281 9.77764 6.12169C10.5046 5.82056 11.2838 5.66557 12.0707 5.66557C12.8576 5.66557 13.6368 5.82056 14.3637 6.12169C15.0907 6.42281 15.7513 6.86418 16.3077 7.4206C16.8641 7.97701 17.3055 8.63757 17.6066 9.36455C17.9077 10.0915 18.0627 10.8707 18.0627 11.6576C18.0627 12.4445 17.9077 13.2237 17.6066 13.9507C17.3055 14.6776 16.8641 15.3382 16.3077 15.8946C15.184 17.0183 13.6599 17.6496 12.0707 17.6496C10.4815 17.6496 8.95741 17.0183 7.83368 15.8946C6.70996 14.7709 6.07866 13.2468 6.07866 11.6576C6.07866 10.0684 6.70996 8.54432 7.83368 7.4206ZM19.3917 6.55793C19.5296 6.42787 19.6399 6.27145 19.7163 6.09796C19.7926 5.92447 19.8334 5.73742 19.8362 5.54789C19.8389 5.35836 19.8036 5.1702 19.7324 4.99455C19.6611 4.81891 19.5553 4.65935 19.4213 4.52531C19.2873 4.39128 19.1277 4.2855 18.9521 4.21424C18.7764 4.14298 18.5883 4.10769 18.3987 4.11045C18.2092 4.11322 18.0222 4.15398 17.8487 4.23033C17.6752 4.30668 17.5187 4.41706 17.3887 4.55494C17.1357 4.8231 16.9972 5.17929 17.0026 5.54789C17.008 5.91649 17.1568 6.26849 17.4175 6.52915C17.6781 6.78982 18.0301 6.93864 18.3987 6.94401C18.7673 6.94939 19.1235 6.81089 19.3917 6.55793Z"
								fill="#A2A2A2"
							/>
						</svg>
					</div>
					<div className="lg:text-[26rem] lg:text-[#A1A1A1]">
						<svg
							width="22"
							height="20"
							viewBox="0 0 22 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.3713 0.00204778C20.0996 0.0220537 19.8329 0.0865647 19.5816 0.193064H19.5783C19.3371 0.289857 18.1903 0.778105 16.4468 1.51819L10.199 4.18128C5.71592 6.09145 1.30899 7.97249 1.30899 7.97249L1.36146 7.95193C1.36146 7.95193 1.05762 8.053 0.740242 8.27314C0.544167 8.39942 0.375444 8.56465 0.244282 8.75882C0.0885538 8.9901 -0.0367058 9.34386 0.0098434 9.70962C0.0860148 10.3281 0.482106 10.699 0.766479 10.9037C1.05424 11.111 1.32845 11.2078 1.32845 11.2078H1.33522L5.46794 12.6168C5.65329 13.219 6.72731 16.7926 6.98545 17.6158C7.13779 18.1075 7.2859 18.415 7.47125 18.6497C7.56096 18.7696 7.66591 18.8698 7.79202 18.9504C7.85757 18.989 7.92747 19.0194 8.00022 19.0412L7.9579 19.0309C7.97059 19.0343 7.98075 19.0446 7.99006 19.048C8.02392 19.0574 8.04677 19.0609 8.08993 19.0677C8.74416 19.2682 9.26974 18.857 9.26974 18.857L9.29936 18.833L11.7394 16.5845L15.8289 19.7598L15.922 19.8001C16.7743 20.1787 17.6376 19.968 18.0938 19.5962C18.5533 19.2219 18.7319 18.7431 18.7319 18.7431L18.7615 18.666L21.9218 2.28054C22.0115 1.87624 22.0344 1.49763 21.9353 1.13016C21.8332 0.758255 21.5975 0.438394 21.2743 0.233323C21.003 0.0663893 20.6884 -0.0141856 20.3713 0.00204778ZM20.2858 1.75803C20.2824 1.81199 20.2926 1.806 20.2689 1.90964V1.91906L17.1382 18.134C17.1247 18.1572 17.1018 18.2077 17.0392 18.2583C16.9732 18.3114 16.9207 18.3448 16.6457 18.2343L11.6437 14.3531L8.62228 17.1404L9.25704 13.0374L17.4294 5.32824C17.7662 5.0113 17.6537 4.94449 17.6537 4.94449C17.6774 4.5556 17.145 4.83057 17.145 4.83057L6.83987 11.2917L6.83649 11.2746L1.8972 9.59141V9.58799L1.88451 9.58542C1.89316 9.58251 1.90164 9.57908 1.9099 9.57514L1.93698 9.56143L1.96322 9.55201C1.96322 9.55201 6.37354 7.67097 10.8566 5.76081C13.1012 4.80401 15.3626 3.84036 17.1018 3.09686C18.8411 2.35763 20.1267 1.81542 20.1995 1.7863C20.2689 1.75888 20.2359 1.75888 20.2858 1.75888V1.75803Z"
								fill="#A2A2A2"
							/>
						</svg>
					</div>
					<div className="lg:text-[26rem] lg:text-[#A1A1A1]">
						<svg
							width="23"
							height="23"
							viewBox="0 0 23 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M11.5 0C5.15967 0 0 5.15967 0 11.5C0 17.8403 5.15967 23 11.5 23C17.8403 23 23 17.8403 23 11.5C23 5.15967 17.8403 0 11.5 0ZM11.5 1.91667C16.8044 1.91667 21.0833 6.19562 21.0833 11.5C21.0857 13.7942 20.263 16.0128 18.7655 17.7508C17.2679 19.4889 15.1953 20.6305 12.926 20.9674V14.2945H15.6553L16.0837 11.522H12.926V10.0079C12.926 8.85787 13.3045 7.83533 14.3808 7.83533H16.1105V5.4165C15.8068 5.37529 15.1637 5.28617 13.9485 5.28617C11.4109 5.28617 9.92354 6.62592 9.92354 9.67917V11.522H7.31496V14.2945H9.92354V20.9434C7.68559 20.5751 5.65152 19.423 4.18475 17.6931C2.71797 15.9632 1.91407 13.7681 1.91667 11.5C1.91667 6.19562 6.19562 1.91667 11.5 1.91667Z"
								fill="#A2A2A2"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className='bg-[url("../img/Header2.png")] bg-contain bg-no-repeat h-[677rem] w-full  lg:z-0 lg:w-[949rem] lg:h-[772rem] lg:bg-[url("../img/Header1.png")] lg:bg-cover lg:bg-no-repeat lg:bg-center lg:pt-[55rem] lg:pl-[15rem] lg:flex lg:flex-row'>
				<div className="hidden lg:flex lg:flex-row lg:gap-[70rem] lg:font-font2 lg:font-[400] lg:text-[16rem] lg:text-white lg:whitespace-nowrap">
					<div className="lg:h-[35rem] lg:border-b-[2rem] lg:border-[#925E10] ">
						<a href="#galery">Галерея</a>
					</div>
					<div className="lg:h-[35rem]">
						<a href="#about">О нас</a>
					</div>
					<div className="lg:h-[35rem]">
						<a href="#contact">Контакты</a>
					</div>
				</div>
				<div className="mx-[20rem] pt-[40rem] lg:mx-[0rem] lg:pt-[305rem]">
					<div className="flex flex-row justify-between mb-[211rem] lg:hidden">
						<div onClick={() => setOpenMenu(true)}>
							<svg
								width="21"
								height="19"
								viewBox="0 0 21 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<line y1="1" x2="21" y2="1" stroke="white" strokeWidth="2" />
								<line y1="9.16675" x2="21" y2="9.16675" stroke="white" strokeWidth="2" />
								<line y1="17.3333" x2="21" y2="17.3333" stroke="white" strokeWidth="2" />
							</svg>
						</div>
						<div>
							<div className="z-20 lg:h-[27rem] flex flex-row items-center gap-[8rem] text-[14rem] lg:gap-[11rem] lg:w-[212rem] lg:text-[18rem] text-[#FFFFFF] font-[400] font-font1 lg:pt-[53rem]">
								<div className="">
									<svg
										width="12"
										height="13"
										viewBox="0 0 12 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M9.22155 12.9999C6.77682 12.9964 4.43312 11.9407 2.70443 10.0643C0.97574 8.1878 0.00316881 5.64375 0 2.99003C0 2.19704 0.290204 1.43654 0.806772 0.875812C1.32334 0.315087 2.02395 7.42905e-05 2.75449 7.42905e-05C2.90919 -0.00120476 3.06362 0.014035 3.21557 0.0455736C3.36246 0.0691685 3.50687 0.108356 3.64671 0.162572C3.74506 0.20003 3.8327 0.264707 3.90096 0.350206C3.96923 0.435705 4.01575 0.539065 4.03593 0.650065L4.85629 4.55001C4.8784 4.65587 4.87574 4.76605 4.84854 4.87051C4.82135 4.97496 4.77048 5.07036 4.7006 5.148C4.62275 5.239 4.61677 5.2455 3.88024 5.66149C4.47006 7.06603 5.50491 8.19396 6.79641 8.83994C7.18563 8.03396 7.19162 8.02746 7.27545 7.94296C7.34697 7.8671 7.43486 7.81189 7.53109 7.78237C7.62732 7.75285 7.72882 7.74996 7.82635 7.77396L11.4192 8.66445C11.5181 8.68938 11.6097 8.74124 11.6851 8.81515C11.7605 8.88906 11.8174 8.98259 11.8503 9.08694C11.9008 9.24122 11.9389 9.39998 11.9641 9.56143C11.9882 9.72479 12.0002 9.88999 12 10.0554C11.989 10.845 11.6906 11.5978 11.17 12.1495C10.6495 12.7011 9.94902 13.0068 9.22155 12.9999Z"
											fill="white"
										/>
									</svg>
								</div>
								<div>+375(29)221-00-00</div>
							</div>
						</div>
					</div>
					<div className="text-white mb-[59rem] lg:mb-[37rem] pl-[16rem] border-l-[8rem] border-[#925E10] lg:pl-[19rem]">
						<div className="w-[261rem] font-font1 font-[700] text-[36rem] leading-[34rem] mb-[8rem] lg:w-full lg:text-[60rem] lg:leading-[58rem] lg:mb-[16rem]">
							Deluxe Apartments
						</div>
						<div className="w-[270rem] font-font2 font-[300] text-[17rem] leading-[23rem] lg:text-[24rem] lg:leading-[33rem] lg:w-[532rem]">
							Апартаменты являются частью элитного квартирного комплекса и находятся в самом центре
							города Бреста.{' '}
						</div>
					</div>
					<div className="h-[30rem] text-white  flex flex-row gap-[7rem] pl-[24rem] lg:gap-[19rem] lg:text-center lg:pl-[27rem]">
						<div className="font-font2 font-[300] text-[12rem] leading-[17rem] lg:text-[20rem] lg:leading-[28rem] lg:text-white">
							<a href="#galery">Посмотреть</a>
						</div>
						<div className="w-[10rem] lg:w-[39rem]">
							{window.innerWidth >= 1024 ? (
								<HiArrowLongRight
									style={{
										color: 'rgb(255 255 255 / 80%)',
										width: '30rem',
										height: '30rem',
									}}
								/>
							) : (
								// <svg fill="none" xmlns="http://www.w3.org/2000/svg">
								// 	<path
								// 		d="M38.3536 4.35355C38.5488 4.15829 38.5488 3.84171 38.3536 3.64645L35.1716 0.464466C34.9763 0.269204 34.6597 0.269204 34.4645 0.464466C34.2692 0.659728 34.2692 0.976311 34.4645 1.17157L37.2929 4L34.4645 6.82843C34.2692 7.02369 34.2692 7.34027 34.4645 7.53553C34.6597 7.7308 34.9763 7.7308 35.1716 7.53553L38.3536 4.35355ZM0 4.5H38V3.5H0V4.5Z"
								// 		fill="white"
								// 	/>
								// </svg>
								<HiArrowLongRight
									style={{
										color: 'white',
										width: '20rem',
										height: '20rem',
									}}
								/>
								// <svg
								// 	width="21"
								// 	height="8"
								// 	viewBox="0 0 21 8"
								// 	fill="none"
								// 	xmlns="http://www.w3.org/2000/svg">
								// 	<path
								// 		d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
								// 		fill="white"
								// 	/>
								// </svg>
							)}
						</div>
					</div>
				</div>
				<div className="hidden lg:absolute lg:translate-y-[600rem] lg:translate-x-[370rem] lg:flex lg:flex-row lg:gap-[18rem]">
					<div className='lg:w-[225rem] lg:h-[209rem] lg:drop-shadow-[0_0px_22px_rgba(255,255,255,0.1)] lg:bg-contain lg:bg-[url("../img/apart1.png")]'></div>
					<div className='lg:w-[225rem] lg:h-[209rem] lg:drop-shadow-[0_0px_22px_rgba(255,255,255,0.1)] lg:bg-contain lg:bg-[url("../img/apart2.png")]'></div>
					<div className='lg:w-[225rem] lg:h-[209rem] lg:drop-shadow-[0_0px_22px_rgba(255,255,255,0.1)] lg:bg-contain lg:bg-[url("../img/apart3.png")]'></div>
				</div>
			</div>
			<div className="hidden relative lg:z-20 lg:h-[27rem] lg:flex lg:flex-row lg:items-center lg:gap-[11rem] lg:w-[212rem] lg:text-[18rem] lg:text-[#FFFFFF] lg:font-[400] lg:font-font1 lg:pt-[53rem]">
				<div className="">
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
				<div className="absolute left-[31rem] font-font1 font-[400] text-[18rem] leading-[27rem]">
					+375(29)221-00-00
				</div>
			</div>
		</div>
	);
}

export default Header;
