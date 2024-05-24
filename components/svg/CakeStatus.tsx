export default function CakeStatus({ hasCake }: { hasCake:boolean }) {
  return hasCake 
  ? <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_673_713)">
    <g filter="url(#filter0_f_673_713)">
    <circle cx="22" cy="13" r="9" fill="#FFE587"/>
    </g>
    <path d="M22 10L24.1225 16.3675C24.5542 17.6626 23.5903 19 22.2251 19H21.7749C20.4097 19 19.4458 17.6626 19.8775 16.3675L22 10Z" fill="#FFA800"/>
    <path d="M7 28H37V41.4207C37 42.0785 29.4634 43.9341 23.8913 43.9967C15.1858 44.0945 7 41.9815 7 40.721V28Z" fill="#FFF0A3"/>
    <g filter="url(#filter1_d_673_713)">
    <ellipse cx="22" cy="27.5" rx="15" ry="3.5" fill="white"/>
    </g>
    <path d="M10.5 34.6105C10.1 36.6316 8 36.1263 7 35.6211V27.0316C7 25.5158 10 24 23 24C33 24 36 25.8526 37 27.0316V33.6C37 37.6421 36.2103 37.7129 34.5 37.1368C33 36.6316 34.5 34.6105 33 33.6C31.5 32.5895 32.2 36.6316 31 37.6421C28 40.1684 28.5 36.6316 27.5 34.6105C26.5 32.5895 25.5 36.6316 25 38.1474C24.5 39.6632 21 39.1579 21.5 36.6316C22 34.1053 18.5 32.0842 18.5 33.6C18.5 34.8126 17.5 36.1263 17 36.6316C15.6667 37.3053 13.1 38.0463 13.5 35.6211C13.9 33.1958 12.6667 32.2526 12 32.0842C11.6667 32.0842 10.9 32.5895 10.5 34.6105Z" fill="#56A078"/>
    <rect x="21.1" y="19.1" width="1.8" height="9.8" fill="white" stroke="#E0E0E0" strokeWidth="0.2"/>
    </g>
    <defs>
    <filter id="filter0_f_673_713" x="3" y="-6" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_673_713"/>
    </filter>
    <filter id="filter1_d_673_713" x="2" y="19" width="40" height="17" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="2.5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.620785 0 0 0 0 0.620785 0 0 0 0 0.620785 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_673_713"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_673_713" result="shape"/>
    </filter>
    <clipPath id="clip0_673_713">
    <rect width="45" height="45" fill="white"/>
    </clipPath>
    </defs>
  </svg>
  : <svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 14H35V27.4207C35 28.0785 27.4634 29.9341 21.8913 29.9967C13.1858 30.0945 5 27.9815 5 26.721V14Z" fill="#FFF0A3"/>
    <g filter="url(#filter0_d_673_713)">
    <ellipse cx="20" cy="13.5" rx="15" ry="3.5" fill="white"/>
    </g>
    <path d="M8.5 20.6105C8.1 22.6316 6 22.1263 5 21.6211V13.0316C5 11.5158 8 10 21 10C31 10 34 11.8526 35 13.0316V19.6C35 23.6421 34.2103 23.7129 32.5 23.1368C31 22.6316 32.5 20.6105 31 19.6C29.5 18.5895 30.2 22.6316 29 23.6421C26 26.1684 26.5 22.6316 25.5 20.6105C24.5 18.5895 23.5 22.6316 23 24.1474C22.5 25.6632 19 25.1579 19.5 22.6316C20 20.1053 16.5 18.0842 16.5 19.6C16.5 20.8126 15.5 22.1263 15 22.6316C13.6667 23.3053 11.1 24.0463 11.5 21.6211C11.9 19.1958 10.6667 18.2526 10 18.0842C9.66667 18.0842 8.9 18.5895 8.5 20.6105Z" fill="#56A078"/>
    <defs>
    <filter id="filter0_d_673_713" x="0" y="5" width="40" height="17" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="2.5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.620785 0 0 0 0 0.620785 0 0 0 0 0.620785 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_673_713"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_673_713" result="shape"/>
    </filter>
    </defs>
  </svg> 
}