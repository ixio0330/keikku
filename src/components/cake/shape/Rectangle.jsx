export default function Rectangle({ color }) {
  return (
    <svg
      width="240"
      height="148"
      viewBox="0 0 240 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_573_1008)">
        <rect x="7" y="44" width="226" height="98" rx="5" fill={color} />
      </g>
      <g filter="url(#filter1_d_573_1008)">
        <path
          d="M13.2602 10.6153C13.6884 8.23333 15.7611 6.5 18.1813 6.5H223.177C225.66 6.5 227.766 8.32111 228.125 10.7773L233.164 45.2773C233.605 48.2944 231.266 51 228.217 51H11.979C8.86353 51 6.50667 48.1817 7.05792 45.1153L13.2602 10.6153Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_573_1008"
          x="1"
          y="38"
          width="238"
          height="110"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_573_1008"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_573_1008"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_573_1008"
          x="0.977539"
          y="0.5"
          width="238.24"
          height="56.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0 0.429606 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_573_1008"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_573_1008"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
