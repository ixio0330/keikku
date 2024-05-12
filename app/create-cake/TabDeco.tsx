import ColorList from "./ColorList";
import { defaultColors } from "./colors";
import { useCreateCakeContext } from '@/context/useCreateCake';
import ShapeList from "./ShapeList";

export default function TabDeco({ onClickPrev, onClickNext }: { onClickPrev: () => void, onClickNext: () => void }) {
  const { deco, setDeco, decoColor, setDecoColor } = useCreateCakeContext();

  return (
    <div className="flex flex-col space-y-10">
      <div className="m-auto border rounded-2xl w-80 h-80 bg-[#FFF8EB] flex justify-center items-center">
        {/* 케이크 세팅 */}
      </div>

      {/* 모양 */}
      <div>
        <ShapeList
          title="모양"
          items={[
            { 
              onClick: () => setDeco("cream"),
              isSelected: deco === "cream",
              Item: () => <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.9744 3C47.9744 3 19.096 9.93965 10.4614 15.6724C1.82683 21.4052 5.69317 21.4052 5.69317 21.4052C7.18063 24.4224 60.2419 6.13793 60.4801 10.2414C60.7779 15.3707 1.52136 27.4397 4.20116 34.3793C6.88096 41.319 66.4363 13.8286 66.4359 19.2931C66.4355 23.5172 9.85724 35.2845 4.20116 44.9397C-1.06609 53.9311 67.626 20.5 65.5417 29.8534C63.4574 39.2069 -9.26 50.3868 4.80409 53.3879C16.1156 55.8017 73.883 26.5345 72.9897 34.3793C72.0965 42.2241 -7.10611 61.2328 10.4614 62.7414C28.029 64.25 77.7498 38 71.1993 44.9397C64.6488 51.8793 15.2253 67.8707 22.3714 69.0776C29.5175 70.2845 57.5065 56.4052 58.6975 62.7414C59.6503 67.8103 45.5963 71.6925 38.4502 73" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            },
            { 
              onClick: () => setDeco("line"),
              isSelected: deco === "line",
              Item: () => <svg width="111" height="116" viewBox="0 0 111 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.56885 17.5C10.2355 22.5 13.0411 31.7399 19.0688 29C30.0688 24 26.0688 20.2727 24.5688 20C22.7355 19.6667 19.0688 20 19.0688 24C19.0688 28 22.7355 29 27.0688 29C31.4022 29 33.8688 25.5 35.0688 17.5" stroke="#FFD249" strokeWidth="3" strokeLinecap="round"/>
                <path d="M46.9697 5.67627C44.9804 7.93636 41.921 12.8213 45.5172 14.4605C52.0799 17.452 52.1896 14.1904 51.7244 13.4083C51.1558 12.4524 49.5684 10.9325 47.7679 12.5005C45.9673 14.0685 46.9545 16.111 48.6532 18.0616C50.3519 20.0122 52.8943 19.7505 56.9657 17.1547" stroke="#F98B8B" strokeWidth="2" strokeLinecap="round"/>
                <path d="M96.5688 3L93.0688 9.5" stroke="#F2002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M81.0688 30V8.5L101.069 16L80.0688 37" stroke="#F2002B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M82.5688 14.5L92.0688 21.5" stroke="#F2002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M80.5688 21.5L90.0688 28.5" stroke="#F2002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M88.0688 1L89.5688 7.5" stroke="#F2002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M81.736 72.7256C81.736 73.1667 81.5382 73.6759 81.3003 74.0327" stroke="#2DD4C0" strokeWidth="3" strokeLinecap="round"/>
                <path d="M87.6182 71.2002C87.5697 71.9287 87.4004 72.6475 87.4004 73.3788" stroke="#2DD4C0" strokeWidth="3" strokeLinecap="round"/>
                <path d="M73.4575 78.1719C73.6233 79.4983 74.93 80.8601 76.0718 81.4882C76.9621 81.9778 77.8762 82.5352 78.7829 82.9647C80.9887 84.0096 84.0202 83.8362 86.3959 83.8362C88.4253 83.8362 90.295 83.9193 92.2538 83.3036C93.5798 82.8869 94.9482 82.2225 96.1753 81.5729C97.359 80.9462 98.9882 79.8321 99.6005 78.6076" stroke="#2DD4C0" strokeWidth="3" strokeLinecap="round"/>
                <path d="M109.186 67.7148C107.423 70.4552 106.354 73.2114 106.354 76.4292" stroke="#2DD4C0" strokeWidth="3" strokeLinecap="round"/>
                <path d="M104.829 81.0039V81.2218" stroke="#2DD4C0" strokeWidth="3" strokeLinecap="round"/>
                <path d="M2 100.611C3.17303 97.7436 3.26794 94.1647 5.36469 91.7514C7.10907 89.7438 9.18668 90.2714 9.84289 93.0344C10.2453 94.7288 9.81795 96.3557 8.7778 97.7425C7.97058 98.8188 8.12236 98.1144 8.31788 97.1253C9.10478 93.1445 11.6776 89.786 15.3498 87.9994C16.6691 87.3576 16.7837 88.2037 16.8143 89.5971C16.858 91.5844 16.8786 93.602 16.8022 95.5882C16.7775 96.2319 16.8115 97.5599 16.1124 97.9483C15.78 98.1329 16.3592 95.358 16.3907 95.2614C17.3382 92.3599 19.9255 88.3326 23.4711 88.6409C24.9484 88.7694 24.8927 89.3914 24.8751 90.7106C24.8663 91.3679 25.023 93.7834 24.4394 94.0753" stroke="#DEED81" strokeWidth="3" strokeLinecap="round"/>
                <path d="M49.4929 114.118C48.0716 114.118 47.5322 110.862 47.5322 109.785C47.5322 108.038 49.0639 106.334 50.5338 105.501C52.2872 104.507 54.2059 105.109 55.9803 105.719C56.7839 105.995 58.2111 107.206 57.7231 108.236C57.3949 108.929 56.9615 109.543 56.1013 109.543C54.1344 109.543 53.6322 107.213 53.6322 105.67C53.6322 101.31 56.6141 98.8682 60.8216 98.8682" stroke="#FF8650" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            },
            { 
              onClick: () => setDeco("sprinkles"),
              isSelected: deco === "sprinkles",
              Item: () => <svg width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="73.5" cy="73.5" r="73.5" fill="white"/>
              <path d="M17.2529 80.9966C17.4867 81.4901 17.6886 81.9706 17.6886 82.5216" stroke="#DEED81" strokeWidth="3" strokeLinecap="round"/>
              <path d="M80.8672 48.1001C80.5545 49.2466 80.2096 50.8293 79.5601 51.8037" stroke="#B0D5FF" strokeWidth="3" strokeLinecap="round"/>
              <path d="M31.6313 49.1895C31.701 49.9552 32.2754 50.4679 32.5028 51.1502" stroke="#D01B1B" strokeWidth="3" strokeLinecap="round"/>
              <path d="M82.392 9.32178C82.392 10.2966 81.7013 11.2771 81.3027 12.1539" stroke="#FF6341" strokeWidth="3" strokeLinecap="round"/>
              <path d="M86.0957 113.022C86.1362 114.075 86.5443 115.121 86.9671 116.072" stroke="#F98B8B" strokeWidth="3" strokeLinecap="round"/>
              <path d="M8.75635 88.6221C9.05233 88.8115 9.31255 88.9317 9.62778 89.0578" stroke="#F5C5C5" strokeWidth="3" strokeLinecap="round"/>
              <path d="M121.825 49.4076C121.788 49.1898 121.43 50.0545 121.377 50.1701C121.202 50.548 120.867 50.7559 120.735 51.1504" stroke="#F5C5C5" strokeWidth="3" strokeLinecap="round"/>
              <path d="M35.9883 14.1143C36.4773 14.318 36.761 14.8499 37.0534 15.2641C37.4072 15.7653 38.1218 16.1501 38.6026 16.5107" stroke="#DEED81" strokeWidth="3" strokeLinecap="round"/>
              <path d="M119.864 112.368C120.659 113.262 119.768 115.487 119.428 116.507" stroke="#DEED81" strokeWidth="3" strokeLinecap="round"/>
              <path d="M56.0312 135.679C56.8354 135.874 57.5223 136.092 58.2098 136.551" stroke="#DEED81" strokeWidth="3" strokeLinecap="round"/>
              <path d="M46.6636 92.3252C47.4157 92.5488 48.1266 92.89 48.8422 93.1966" stroke="#8EDAEA" strokeWidth="3" strokeLinecap="round"/>
              <path d="M98.7316 13.0254C98.6991 13.3183 98.4948 13.48 98.2959 13.679" stroke="#FFE70B" strokeWidth="3" strokeLinecap="round"/>
              <path d="M60.1709 80.7788C61.818 81.228 63.3977 82.0683 64.9638 82.7395" stroke="#FFE70B" strokeWidth="3" strokeLinecap="round"/>
              <path d="M19.2135 45.2681L18.9956 46.1395" stroke="#FFE70B" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            },
            { 
              onClick: () => setDeco("heart"),
              isSelected: deco === "heart",
              Item: () => <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_617_524)">
              <g clipPath="url(#clip1_617_524)">
              <path d="M16.0115 24.8464L15.8665 25.4842L15.2401 25.2913C13.6433 24.7994 12.0468 25.7211 11.6744 27.35C11.3019 28.9789 12.2945 30.6982 13.8914 31.1901L19.8979 33.0403C20.1208 33.109 20.3435 32.9803 20.3955 32.753L21.7988 26.6238C22.167 24.9926 21.1789 23.2772 19.5817 22.7852C17.9819 22.2924 16.3847 23.2145 16.0115 24.8464Z" fill="#212121"/>
              </g>
              <g clipPath="url(#clip2_617_524)">
              <path d="M32.589 63.5793L32.2838 64.1578L31.7287 63.8094C30.3136 62.9209 28.533 63.3981 27.7516 64.8751C26.9703 66.3521 27.4841 68.2697 28.8993 69.1581L34.2222 72.4999C34.4197 72.6239 34.6682 72.5573 34.7772 72.3512L37.719 66.794C38.4969 65.3137 37.9864 63.401 36.571 62.5124C35.1533 61.6223 33.3718 62.0996 32.589 63.5793Z" fill="#212121"/>
              </g>
              <g clipPath="url(#clip3_617_524)">
              <path d="M56.3865 6.29056L55.7616 6.4838L55.6155 5.84493C55.2431 4.21604 53.6466 3.29432 52.0497 3.78623C50.4528 4.27814 49.4602 5.9974 49.8326 7.62633L51.2335 13.7532C51.2855 13.9805 51.5083 14.1091 51.7311 14.0405L57.7408 12.1911C59.3376 11.6945 60.3291 9.98098 59.9566 8.35179C59.5835 6.71991 57.9863 5.79775 56.3865 6.29056Z" fill="#212121"/>
              </g>
              <path d="M48.8606 34.92L48.4161 35.3998L47.9701 34.9196C46.8332 33.6951 44.9897 33.6951 43.8527 34.9196C42.7158 36.144 42.7158 38.1293 43.8527 39.3537L48.1294 43.9593C48.288 44.1302 48.5453 44.1302 48.7039 43.9593L52.9839 39.3529C54.1183 38.1244 54.1203 36.1447 52.9831 34.92C51.844 33.6933 49.9997 33.6933 48.8606 34.92Z" fill="#212121"/>
              <g clipPath="url(#clip4_617_524)">
              <path d="M72.3865 59.2906L71.7616 59.4838L71.6155 58.8449C71.2431 57.216 69.6466 56.2943 68.0497 56.7862C66.4528 57.2781 65.4602 58.9974 65.8326 60.6263L67.2335 66.7532C67.2855 66.9805 67.5083 67.1091 67.7311 67.0405L73.7408 65.1911C75.3376 64.6945 76.3291 62.981 75.9566 61.3518C75.5835 59.7199 73.9863 58.7977 72.3865 59.2906Z" fill="#212121"/>
              </g>
              <g clipPath="url(#clip5_617_524)">
              <path d="M23.9023 0.474843L23.9192 0.919138L23.474 0.902663C22.339 0.860611 21.4529 1.74668 21.495 2.88173C21.537 4.01679 22.4912 4.97101 23.6263 5.01306L27.8956 5.17117C28.054 5.17704 28.1777 5.05339 28.1718 4.89501L28.0148 0.623672C27.9696 -0.512113 27.019 -1.4646 25.8838 -1.50666C24.7466 -1.54878 23.8601 -0.662283 23.9023 0.474843Z" fill="#212121"/>
              </g>
              <g clipPath="url(#clip6_617_524)">
              <path d="M12.9023 50.4748L12.9192 50.9191L12.474 50.9027C11.339 50.8606 10.4529 51.7467 10.495 52.8817C10.537 54.0168 11.4912 54.971 12.6263 55.0131L16.8956 55.1712C17.054 55.177 17.1777 55.0534 17.1718 54.895L17.0148 50.6237C16.9696 49.4879 16.019 48.5354 14.8838 48.4933C13.7466 48.4512 12.8601 49.3377 12.9023 50.4748Z" fill="#212121"/>
              </g>
              <g clipPath="url(#clip7_617_524)">
              <path d="M70.8524 27.3175L70.4397 27.4827L70.3056 27.0579C69.9638 25.9748 68.8314 25.438 67.7765 25.859C66.7216 26.2801 66.1436 27.4995 66.4854 28.5827L67.7713 32.6568C67.819 32.808 67.977 32.8829 68.1242 32.8241L72.0943 31.2409C73.1489 30.8166 73.7265 29.6012 73.3846 28.5178C73.0421 27.4327 71.9093 26.8957 70.8524 27.3175Z" fill="#212121"/>
              </g>
              </g>
              <defs>
              <clipPath id="clip0_617_524">
              <rect width="84" height="84" fill="white"/>
              </clipPath>
              <clipPath id="clip1_617_524">
              <rect width="13" height="14" fill="white" transform="translate(8.37061 25.5) rotate(-30)"/>
              </clipPath>
              <clipPath id="clip2_617_524">
              <rect width="13" height="14" fill="white" transform="translate(25.0391 62.2329) rotate(-15)"/>
              </clipPath>
              <clipPath id="clip3_617_524">
              <rect width="13" height="14" fill="white" transform="translate(52) rotate(30)"/>
              </clipPath>
              <clipPath id="clip4_617_524">
              <rect width="13" height="14" fill="white" transform="translate(68 53) rotate(30)"/>
              </clipPath>
              <clipPath id="clip5_617_524">
              <rect width="8.83684" height="9.51659" fill="white" transform="translate(19 2.24854) rotate(-45)"/>
              </clipPath>
              <clipPath id="clip6_617_524">
              <rect width="8.83684" height="9.51659" fill="white" transform="translate(8 52.2485) rotate(-45)"/>
              </clipPath>
              <clipPath id="clip7_617_524">
              <rect width="8.83684" height="9.51659" fill="white" transform="translate(67.5347 23.2964) rotate(25.3629)"/>
              </clipPath>
              </defs>
              </svg>
              
            },
            { 
              onClick: () => setDeco("flower"),
              isSelected: deco === "flower",
              Item: () => <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_617_541)">
              <ellipse cx="19.5" cy="32.5" rx="4.5" ry="8.5" fill="#D9D9D9"/>
              <ellipse cx="19.5" cy="48.5" rx="4.5" ry="8.5" fill="#D9D9D9"/>
              <ellipse cx="25.82" cy="35.6148" rx="4.5" ry="8.5" transform="rotate(26.4996 25.82 35.6148)" fill="#D9D9D9"/>
              <ellipse cx="12.9431" cy="47.6148" rx="4.5" ry="8.5" transform="rotate(26.4996 12.9431 47.6148)" fill="#D9D9D9"/>
              <ellipse cx="4.5" cy="8.5" rx="4.5" ry="8.5" transform="matrix(-0.894938 0.446192 0.446192 0.894938 13.0542 26)" fill="#D9D9D9"/>
              <ellipse cx="28.8871" cy="41.2831" rx="4.5" ry="8.5" transform="rotate(84.5777 28.8871 41.2831)" fill="#D9D9D9"/>
              <ellipse cx="10.8558" cy="41.2831" rx="4.5" ry="8.5" transform="rotate(84.5777 10.8558 41.2831)" fill="#D9D9D9"/>
              <ellipse cx="25.4119" cy="47.8967" rx="4.5" ry="8.5" transform="rotate(129.774 25.4119 47.8967)" fill="#D9D9D9"/>
              <circle cx="19.5" cy="41.5" r="5.5" fill="#F3F4F5"/>
              <ellipse cx="55.5312" cy="4.5" rx="4.5" ry="8.5" fill="#D9D9D9"/>
              <ellipse cx="55.5312" cy="20.5" rx="4.5" ry="8.5" fill="#D9D9D9"/>
              <ellipse cx="61.8513" cy="7.61483" rx="4.5" ry="8.5" transform="rotate(26.4996 61.8513 7.61483)" fill="#D9D9D9"/>
              <ellipse cx="48.9743" cy="19.6148" rx="4.5" ry="8.5" transform="rotate(26.4996 48.9743 19.6148)" fill="#D9D9D9"/>
              <ellipse cx="4.5" cy="8.5" rx="4.5" ry="8.5" transform="matrix(-0.894938 0.446192 0.446192 0.894938 49.0854 -2)" fill="#D9D9D9"/>
              <ellipse cx="64.9184" cy="13.2831" rx="4.5" ry="8.5" transform="rotate(84.5777 64.9184 13.2831)" fill="#D9D9D9"/>
              <ellipse cx="46.8871" cy="13.2831" rx="4.5" ry="8.5" transform="rotate(84.5777 46.8871 13.2831)" fill="#D9D9D9"/>
              <ellipse cx="61.4432" cy="19.8967" rx="4.5" ry="8.5" transform="rotate(129.774 61.4432 19.8967)" fill="#D9D9D9"/>
              <circle cx="55.5312" cy="13.5" r="5.5" fill="#F3F4F5"/>
              <ellipse cx="61.5312" cy="59.5" rx="4.5" ry="8.5" fill="#D9D9D9"/>
              <ellipse cx="61.5312" cy="75.5" rx="4.5" ry="8.5" fill="#D9D9D9"/>
              <ellipse cx="67.8513" cy="62.6148" rx="4.5" ry="8.5" transform="rotate(26.4996 67.8513 62.6148)" fill="#D9D9D9"/>
              <ellipse cx="54.9743" cy="74.6148" rx="4.5" ry="8.5" transform="rotate(26.4996 54.9743 74.6148)" fill="#D9D9D9"/>
              <ellipse cx="4.5" cy="8.5" rx="4.5" ry="8.5" transform="matrix(-0.894938 0.446192 0.446192 0.894938 55.0854 53)" fill="#D9D9D9"/>
              <ellipse cx="70.9184" cy="68.2831" rx="4.5" ry="8.5" transform="rotate(84.5777 70.9184 68.2831)" fill="#D9D9D9"/>
              <ellipse cx="52.8871" cy="68.2831" rx="4.5" ry="8.5" transform="rotate(84.5777 52.8871 68.2831)" fill="#D9D9D9"/>
              <ellipse cx="67.4432" cy="74.8967" rx="4.5" ry="8.5" transform="rotate(129.774 67.4432 74.8967)" fill="#D9D9D9"/>
              <circle cx="61.5312" cy="68.5" r="5.5" fill="#F3F4F5"/>
              </g>
              <defs>
              <clipPath id="clip0_617_541">
              <rect width="84" height="84" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              
            },
            { 
              onClick: () => setDeco("carrot"),
              isSelected: deco === "carrot",
              Item: () => <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_617_576)">
              <path d="M11.3755 23.4847C16.1925 18.9977 26.1431 10.4987 27.41 12.3991C28.9937 14.7746 11.5734 25.8601 16.9183 24.6724C22.2631 23.4847 29.5876 15.9623 30.3794 18.5357C31.1712 21.1092 18.502 28.9528 21.0754 28.7549C23.6488 28.5569 32.7549 22.8908 31.5671 26.2561C30.3794 29.6213 23.4509 32.5161 26.0243 31.9222C28.0831 31.4471 30.3794 29.6701 32.9528 31.9222" stroke="#DADCDF" strokeWidth="4" strokeLinecap="round"/>
              <path d="M9 10.9488C11.4215 11.0939 16.5068 11.8484 17.4754 13.7055C18.6862 16.027 14.7512 7.61166 16.1133 5" stroke="#898F98" strokeWidth="8" strokeLinecap="round"/>
              <path d="M28.3755 75.4847C33.1925 70.9977 43.1431 62.4987 44.41 64.3991C45.9937 66.7746 28.5734 77.8601 33.9183 76.6724C39.2631 75.4847 46.5876 67.9623 47.3794 70.5357C48.1712 73.1092 35.502 80.9528 38.0754 80.7549C40.6488 80.5569 49.7549 74.8908 48.5671 78.2561C47.3794 81.6213 40.4509 84.5161 43.0243 83.9222C45.0831 83.4471 47.3794 81.6701 49.9528 83.9222" stroke="#DADCDF" strokeWidth="4" strokeLinecap="round"/>
              <path d="M26 62.9488C28.4215 63.0939 33.5068 63.8484 34.4754 65.7055C35.6862 68.027 31.7512 59.6117 33.1133 57" stroke="#898F98" strokeWidth="8" strokeLinecap="round"/>
              <path d="M60.3755 24.4847C65.1925 19.9977 75.1431 11.4987 76.41 13.3991C77.9937 15.7746 60.5734 26.8601 65.9183 25.6724C71.2631 24.4847 78.5876 16.9623 79.3794 19.5357C80.1712 22.1092 67.502 29.9528 70.0754 29.7549C72.6488 29.5569 81.7549 23.8908 80.5671 27.2561C79.3794 30.6213 72.4509 33.5161 75.0243 32.9222C77.0831 32.4471 79.3794 30.6701 81.9528 32.9222" stroke="#DADCDF" strokeWidth="4" strokeLinecap="round"/>
              <path d="M58 11.9488C60.4215 12.0939 65.5068 12.8484 66.4754 14.7055C67.6862 17.027 63.7512 8.61166 65.1133 6" stroke="#898F98" strokeWidth="8" strokeLinecap="round"/>
              </g>
              <defs>
              <clipPath id="clip0_617_576">
              <rect width="84" height="84" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              
            },
          ]}
        />
      </div>

      {/* 색상 */}
      <div>
        <ColorList 
          items={defaultColors} 
          selectColor={decoColor} 
          setColor={setDecoColor}
        />
      </div>

      <div className="flex w-full absolute bottom-0 left-0 py-4">
        <button
          onClick={onClickPrev} 
          className='w-3/5 text-[#175428] font-semibold border border-[#175428] rounded-lg box-border p-2 bg-white font-xs mr-4'
        >
          이전
        </button>
        <button 
          onClick={onClickNext}
          className='w-full text-white font-semibold border border-[#175428] rounded-lg box-border p-2 bg-[#175428] font-xs'
        >
          다음
        </button>
      </div>
    </div>
  )
}