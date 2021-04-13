import { useTheme } from "@emotion/react";
import React from "react";

function Logo() {
	const theme = useTheme();
	return (
		<svg width="136" height="36" fill="none" viewBox="0 0 136 36">
			<defs>
				<path
					id="reuse-0"
					fill="#231F20"
					fillRule="evenodd"
					d="M12.714 17.412c-.376-.645-.235-1.393.315-1.67.549-.278 1.298.02 1.674.665.376.645.234 1.392-.316 1.67-.55.279-1.299-.02-1.673-.665z"
				/>
			</defs>
			<g clipPath="url(#clip0)">
				<path
					fill="url(#paint0_radial)"
					fillRule="evenodd"
					d="M24.54 19.869s3.226-7.01 9.424-11.626l.752-.03c.014-.597.17-1.174.455-1.687 0 0-.89-.008-1.786-.766l-2.95 3.956s-5.836 6.9-7.246 9.585c.006 0-.167.697 1.352.568z"
				/>
				<path
					fill="#353535"
					fillRule="evenodd"
					d="M24.587 19.78s3.2-6.931 9.366-11.488l.749-.029c.013-.59.167-1.16.45-1.667 0 0-.886-.01-1.78-.762l-2.932 3.91s-5.801 6.817-7.2 9.471c.006 0-.165.69 1.347.565z"
					opacity=".8"
				/>
				<path
					fill="url(#paint1_radial)"
					fillRule="evenodd"
					d="M16.059 18.243s-1.827-4.176-6.864-5.755c0 0-4.558-1.609-8.16 4.038 0 0-2.656 4.893.786 9.26 0 0 2.731 4.761 8.962 3.704 0 0 1.489-.17 1.74-1.335l3.536-9.912z"
				/>
				<path
					fill="#353535"
					fillOpacity=".2"
					fillRule="evenodd"
					d="M16.26 18.562s-2.353-4.57-7.477-6.174c0 0-4.168-1.211-7.79 4.358 0 0-2.665 4.83.859 9.183 0 0 2.435 4.182 8.76 3.554 0 0 1.634-.1 1.883-1.254l3.764-9.667z"
					opacity=".423"
				/>
				<use fillRule="evenodd" xlinkHref="#reuse-0" />
				<use fillRule="evenodd" xlinkHref="#reuse-0" />
				<path
					fill="url(#paint2_radial)"
					fillOpacity=".4"
					fillRule="evenodd"
					d="M16.206 18.453S14.325 14.3 9.2 12.697c0 0-4.639-1.63-8.26 3.94 0 0-2.665 4.829.859 9.183 0 0 2.804 4.74 9.123 3.74 0 0 1.51-.157 1.76-1.31l3.524-9.797z"
					opacity=".5"
				/>
				<g filter="url(#filter0_f)">
					<path
						fill="url(#paint3_linear)"
						fillRule="evenodd"
						d="M13.442 19.816s-3.97-3.684-4.578-4.198c0 0-.827 3.34 3.597 5.196 0 0 .747-.053.98-.998z"
					/>
				</g>
				<path
					fill="url(#paint4_radial)"
					fillRule="evenodd"
					d="M23.182 19.116s-3.624-2.744-6.952-1.54c0 0-3.875 1.228-4.88 5.763 0 0-1.171 6.322 4.886 9.653 0 0 4.559 2.432 8.174-.156 0 0 4.989-3.08 4.311-8.167.002 0-.563-3.338-5.54-5.553z"
				/>
				<g filter="url(#filter1_f)" opacity=".497">
					<path
						fill="#fff"
						fillRule="evenodd"
						d="M22.74 22.871s-4.106-2.2-1.543-3.294c0 0 4.957.23 4.772 4.191 0 0-.088.65-3.229-.897z"
					/>
				</g>
				<path
					fill="url(#paint5_linear)"
					fillRule="evenodd"
					d="M14.136 17.242s-.921-.302-.643-1.428l11.078-6.249.665.47-11.1 7.207z"
				/>
				<path
					fill="#353535"
					fillRule="evenodd"
					d="M14.158 17.203s-.917-.302-.63-1.46L24.432 9.61l.66.477-10.935 7.115z"
					opacity=".8"
				/>
				<path
					fill="url(#paint6_linear)"
					fillRule="evenodd"
					d="M20.988 1.162c9.21-.395 14.849 4.966 15.231 5.342-3.662 1.481-19.568-1.44-21.907-1.783 2.023-3.09 6.676-3.559 6.676-3.559z"
				/>
				<path
					fill="url(#paint7_linear)"
					fillRule="evenodd"
					d="M20.988 1.162c9.21-.395 14.849 4.966 15.231 5.342-2.748.84-19.527-1.44-21.865-1.783 2.023-3.09 6.634-3.559 6.634-3.559z"
					opacity=".5"
				/>
				<path
					fill="url(#paint8_linear)"
					fillRule="evenodd"
					d="M36.17 6.492l.024.021c-.246.553-1.235 1.515-1.235 1.515C30.53 12.5 23.6 9.751 23.6 9.751c-6.614-1.724-9.288-5.03-9.288-5.03 2.335.356 19.124 2.566 21.859 1.771z"
				/>
				<path
					fill="url(#paint9_linear)"
					fillRule="evenodd"
					d="M36.17 6.492l.024.021c-.246.553-1.235 1.515-1.235 1.515C30.53 12.5 23.6 9.751 23.6 9.751c-6.614-1.724-9.288-5.03-9.288-5.03 2.335.356 19.124 2.566 21.859 1.771z"
					opacity=".5"
				/>
			</g>
			<path
				fill={theme.isDark ? "#fff" : "#000"}
				fillRule="evenodd"
				d="M84.178 23.828c-2.42 2.073-5.373 3.217-8.424 3.217-3.387 0-5.428-1.419-6.016-3.729-2.145 2.164-4.808 3.656-6.93 3.656-2.09 0-2.786-1.352-2.786-2.85 0-2.084 1.906-6.36 1.906-7.858 0-.549-.256-.731-.586-.731-1.1 0-3.446 3.033-6.158 9.648-.477 1.17-.916 1.754-2.676 1.754-.77 0-1.906-.11-3.225-.255.29-.688.607-1.59.938-2.632-3.16 2.844-6.601 4.13-10.39 4.13-6.562 0-10.154-4.093-10.154-10.124C29.677 9.32 37.228 0 46.502 0c3.335 0 6.34 1.352 6.377 5.409 0 3.764-3.335 6.396-6.45 6.396-2.017 0-2.823-.84-2.823-2.778.366.146.843.256 1.283.256 1.906 0 3.408-1.681 3.408-3.655 0-1.754-1.026-2.704-2.858-2.704-4.546 0-9.604 7.638-9.604 14.728 0 4.386 2.163 6.944 6.305 6.944 3.188 0 6.414-1.535 9.273-4.75l.007.026c1.392-5.26 2.664-11.414 2.664-13.184 0-.877-.146-1.681-.55-2.156 1.65-.84 3.336-1.352 4.582-1.352 1.026 0 1.65.438 1.65 1.644 0 1.28-1.173 7.383-2.566 12.317 3.189-3.618 6.084-5.519 8.137-5.519 1.21 0 2.09.694 2.09 2.303 0 2.74-2.017 7.272-2.017 8.88 0 .402.11.585.404.585.59 0 2.26-1.334 3.883-3.029.788-4.27 4.892-8.739 10.383-8.739 2.859 0 4.288.95 4.288 2.96 0 3.655-4.288 6.104-8.467 6.104h-.916c-.11.402-.147.84-.147 1.17 0 1.498.806 2.448 2.566 2.448 1.98 0 4.582-.95 7.367-4.02.061-.06.122-.11.176-.142 1.372-1.708 2.427-3.365 2.984-4.72.11-.255.147-.401.147-.51 0-.44-.953-.695-.953-1.792 0-.877.55-2.302 2.272-3.8 1.613 2.594 8.174 2.558 8.174 5.92 0 2.485-2.382 6.213-2.382 7.602 0 .439.183.621.44.621.489 0 2.04-1.014 3.945-2.954 1.517-1.836 2.686-3.635 3.283-5.086.11-.256.147-.402.147-.512 0-.438-.953-.694-.953-1.79 0-.878.55-2.303 2.272-3.801 1.613 2.594 8.174 2.558 8.174 5.92 0 2.485-2.382 6.213-2.382 7.602 0 .439.183.621.439.621.622 0 2.961-1.638 5.558-4.734.563-1.792 1.121-3.535 1.121-4.622 0-.621-.11-1.133-.403-1.535 1.393-.621 2.969-.95 3.922-.95 1.393 0 1.979.658 1.979 1.864 0 2.193-2.456 8.004-2.456 9.356 0 .548.22.804.624.804 1.063 0 3.628-2.412 5.058-5.701.66-1.462 1.099-3.363 1.099-4.313 0-.365-.036-.914-.11-1.242 1.173-.512 2.603-.768 3.483-.768 1.319 0 2.089.402 2.089 1.645 0 1.352-1.869 7.2-3.372 11.22 2.089-1.462 4.875-3.801 6.158-5.519.183-.22.329-.329.439-.329.184 0 .257.183.257.548 0 1.462-.22 2.193-.843 2.924-1.466 1.754-4.105 4.057-7.074 5.957-2.713 5.263-5.902 7.2-7.478 7.2-1.136 0-1.906-2.193-1.906-3.435 0-.804 1.686-2.595 3.849-3.91.403-.257.623-.476.733-.695.33-.622 1.063-2.668 1.43-3.947-3.483 2.85-5.315 3.435-7.148 3.435-1.833 0-2.602-1.243-2.602-2.997 0-.28.027-.586.075-.914-2.373 2.53-5.06 4.167-7.231 4.167-1.979 0-2.749-1.17-2.749-2.997 0-2.083 2.31-5.701 2.31-6.944 0-.548-.807-.73-1.87-1.28-1.539 2.998-3.665 5.921-6.084 7.968-.074.073-.22.11-.33.11h-.002c-2.097 1.938-4.34 3.143-6.2 3.143-1.98 0-2.75-1.17-2.75-2.997 0-2.083 2.31-5.701 2.31-6.944 0-.548-.807-.73-1.87-1.28-1.54 2.998-3.665 5.921-6.084 7.968-.069.069-.201.105-.308.11zm-4.501-9.173c0-.73-.294-1.17-.844-1.17-1.21 0-2.602 1.975-3.482 5.63 2.31-.22 4.326-2.23 4.326-4.46z"
			/>
			<defs>
				<linearGradient
					id="paint3_linear"
					x1="12.802"
					x2="9.469"
					y1="19.834"
					y2="16.045"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset=".01" stopColor="#fff" />
					<stop offset="1" stopColor="#fff" stopOpacity="0" />
				</linearGradient>
				<linearGradient
					id="paint5_linear"
					x1="23.61"
					x2="14.22"
					y1="10.161"
					y2="16.369"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset=".01" stopColor="#475023" />
					<stop offset="1" stopColor="#485425" />
				</linearGradient>
				<linearGradient
					id="paint6_linear"
					x1="20.32"
					x2="31.675"
					y1="3.049"
					y2="3.568"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#42642F" />
					<stop offset="1" stopColor="#527435" />
				</linearGradient>
				<linearGradient
					id="paint7_linear"
					x1="22.149"
					x2="21.754"
					y1="1.328"
					y2="3.99"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#231F20" />
					<stop offset="1" stopColor="#231F20" stopOpacity="0" />
				</linearGradient>
				<linearGradient
					id="paint8_linear"
					x1="19.273"
					x2="32.911"
					y1="5.336"
					y2="5.949"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#688C3C" />
					<stop offset="1" stopColor="#28A745" />
				</linearGradient>
				<linearGradient
					id="paint9_linear"
					x1="28.233"
					x2="28.47"
					y1="9.587"
					y2="7.064"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#231F20" />
					<stop offset="1" stopColor="#231F20" stopOpacity="0" />
				</linearGradient>
				<radialGradient
					id="paint0_radial"
					cx="0"
					cy="0"
					r="1"
					gradientTransform="rotate(147.366 19.603 11.344) scale(5.15603 14.4334)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset=".3" stopColor="#5F6831" />
					<stop offset="1" stopColor="#3D431C" />
				</radialGradient>
				<radialGradient
					id="paint1_radial"
					cx="0"
					cy="0"
					r="1"
					gradientTransform="matrix(-4.56948 -1.32894 1.27072 -4.36929 5.769 15.895)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FDA4AF" />
					<stop offset="1" stopColor="#F43F5E" />
				</radialGradient>
				<radialGradient
					id="paint2_radial"
					cx="0"
					cy="0"
					r="1"
					gradientTransform="matrix(-7.415 -2.15664 2.06223 -7.09038 15.964 23.594)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset=".55" stopColor="#231F20" />
					<stop offset="1" stopColor="#231F20" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="paint4_radial"
					cx="0"
					cy="0"
					r="1"
					gradientTransform="matrix(-4.48449 -1.30414 1.24692 -4.28773 17.26 22.395)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FDA4AF" />
					<stop offset="1" stopColor="#F43F5E" />
				</radialGradient>
				<filter
					id="filter0_f"
					width="64.639"
					height="65.196"
					x="-21.197"
					y="-14.382"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						result="effect1_foregroundBlur"
						stdDeviation="15"
					/>
				</filter>
				<filter
					id="filter1_f"
					width="65.62"
					height="64.327"
					x="-9.645"
					y="-10.423"
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						result="effect1_foregroundBlur"
						stdDeviation="15"
					/>
				</filter>
				<clipPath id="clip0">
					<path
						fill="#fff"
						d="M0 0h36.156v32.985H0z"
						transform="translate(0 1.122)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

export { Logo };
