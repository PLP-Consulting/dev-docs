import type { FC } from "react";

import type { IconProps } from "../types";

const AdjustLogo: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 113}
      height={height ?? 28}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.8875 11.7045C21.0223 10.0261 20.1658 8.33909 19.3093 6.65206L19.3093 6.65201C18.4528 4.96499 17.5963 3.27797 16.7312 1.5996C16.3505 0.838275 15.7622 0.457611 14.9317 0.492217C14.205 0.526822 13.6859 0.907487 13.3398 1.565C12.8155 2.58594 12.2968 3.60688 11.7791 4.62562L11.779 4.62585L11.7789 4.62603C10.9982 6.16248 10.22 7.69394 9.42935 9.21289C9.25632 9.52434 9.1179 9.55895 8.80645 9.45513C7.3184 9.00526 5.79574 8.76302 4.23847 8.86683C0.985524 9.07447 -0.744769 11.7737 0.466436 14.7844C1.02013 16.1341 1.85067 17.3107 2.85424 18.3142C3.61557 19.0756 4.44611 19.8023 5.34586 20.356C6.38404 21.0135 7.45682 20.6328 8.04512 19.5254L11.1596 13.4348C12.5439 14.1269 13.8589 14.7844 15.1739 15.5112C17.7348 16.8954 20.1572 18.5219 22.5104 20.2522C23.0295 20.6328 23.5831 20.8059 24.2061 20.5982C25.2788 20.2522 25.6595 19.1448 25.0712 18.0028C24.033 15.8918 22.9602 13.7809 21.8875 11.7045ZM5.58794 16.8262C4.54976 15.788 3.5808 14.7498 3.16553 13.331C2.92328 12.5697 3.23474 12.0852 4.03067 11.9122C5.13806 11.6699 6.24545 11.8775 7.31823 12.1198C7.42351 12.1408 7.52878 12.1747 7.64965 12.2136L7.64968 12.2136L7.6497 12.2136C7.72747 12.2386 7.81169 12.2657 7.90653 12.2928C7.50858 13.0541 7.12793 13.8068 6.74728 14.5594L6.74724 14.5595C6.36657 15.3122 5.98591 16.0649 5.58794 16.8262ZM15.0699 5.89076L12.5783 10.7702L19.4303 14.4384L15.0699 5.89076Z"
        fill="black"
      ></path>
      <path
        d="M73.9311 1.77264C72.9968 1.77264 72.2701 2.53397 72.2355 3.50294C72.2355 6.09837 72.2355 8.69381 72.2355 11.2893C72.2355 11.7737 72.2009 12.2236 72.1316 12.7081C71.6472 15.8572 68.8095 17.8298 65.7988 17.103C63.3418 16.4801 61.6115 14.2654 61.5769 11.7045C61.5769 9.00527 61.5769 6.30601 61.5769 3.60675C61.5769 2.49937 60.8847 1.77264 59.8812 1.73804C59.0852 1.73804 58.1855 2.43015 58.2201 3.57215C58.2893 4.99099 58.2201 6.40983 58.2201 7.82867C58.2201 9.10908 58.2201 10.3549 58.2201 11.6353C58.2201 12.1198 58.2547 12.5697 58.3239 13.0542C59.0852 17.9682 63.6186 21.498 68.7749 20.4944C72.6853 19.7331 75.2116 16.3417 75.4192 12.8465C75.6268 9.66278 75.523 6.47904 75.523 3.2953C75.5922 2.43015 74.8309 1.77264 73.9311 1.77264Z"
        fill="black"
      ></path>
      <path
        d="M110.582 2.25708C105.807 2.25708 101.031 2.25708 96.2554 2.25708C96.0824 2.25708 95.9094 2.25708 95.7363 2.29169C95.0788 2.3609 94.5251 2.87999 94.3521 3.5375C94.0753 4.7487 94.8366 5.64845 96.1516 5.64845C97.8473 5.64845 99.5776 5.64845 101.273 5.64845H101.792V18.6257C101.792 18.7987 101.792 18.9717 101.792 19.1447C101.896 20.4598 103.246 21.1519 104.388 20.4252C105.011 20.0099 105.184 19.4216 105.184 18.7295C105.184 14.5768 105.184 10.3895 105.184 6.23675V5.68306C106.983 5.68306 108.748 5.68306 110.478 5.68306C110.721 5.68306 110.998 5.68306 111.24 5.61385C112.001 5.47542 112.486 4.88713 112.52 4.1258C112.555 2.9492 111.793 2.25708 110.582 2.25708Z"
        fill="black"
      ></path>
      <path
        d="M90.2997 11.3619C89.2962 10.7044 88.1888 10.3237 87.0814 9.90846C85.974 9.49319 84.8666 9.11253 83.8284 8.62804C83.1017 8.28199 82.6864 7.58987 82.8249 6.72472C82.9287 5.85958 83.4824 5.34049 84.2437 5.06364C85.7664 4.54455 87.1852 4.68298 88.4656 5.75576C88.7079 5.96339 88.9501 6.17103 89.2269 6.37866C89.3654 6.48248 89.5038 6.5863 89.6768 6.6209C90.2651 6.79393 90.7842 6.5863 91.1649 6.10182C91.5801 5.61733 91.6148 5.09825 91.3379 4.54455C90.9918 3.78322 90.4382 3.22953 89.7114 2.81426C87.1852 1.43003 84.5898 1.32621 82.0289 2.71044C80.091 3.74862 79.122 5.65194 79.4335 7.7975C79.6411 9.21634 80.5409 10.1507 81.6483 10.8774C82.8595 11.6734 84.2091 12.1578 85.5933 12.6077C86.4931 12.8846 87.3928 13.1268 88.1542 13.7497C88.9501 14.3726 89.2269 15.3416 88.7425 16.1375C88.5002 16.5528 88.085 16.9681 87.6697 17.2103C85.8702 18.2485 83.4132 17.6948 82.1674 15.9991C81.8559 15.5838 81.5444 15.2032 81.0254 15.0647C80.3678 14.8571 79.7795 14.9263 79.2951 15.4454C78.8106 15.9645 78.7414 16.5874 79.0528 17.1757C79.3297 17.6948 79.6757 18.2485 80.091 18.6637C81.6137 20.1864 83.5862 20.6017 85.3165 20.7055C87.8427 20.7055 89.6422 19.9442 90.9572 18.5253C92.6529 16.7258 92.999 13.196 90.2997 11.3619Z"
        fill="black"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.7989 1.77258C40.2631 1.80719 44.1735 4.78329 45.1425 9.00521C46.4229 14.6114 42.9277 19.8368 37.1139 20.5636C36.2066 20.6932 35.2798 20.7063 34.3628 20.7192C34.0556 20.7236 33.7496 20.7279 33.4457 20.7366V20.702H30.5042C29.3968 20.6674 28.7047 20.0099 28.7047 18.9025V3.60669C28.7047 2.4647 29.4314 1.77258 30.5388 1.77258H35.7989ZM36.318 17.1721C37.9445 17.1029 39.4326 16.5492 40.5053 15.2688C42.1318 13.3309 42.5125 11.1161 41.5435 8.79752C40.5399 6.47893 38.6366 5.23312 36.0758 5.1293C35.267 5.10619 34.4737 5.11394 33.6854 5.12165C33.2932 5.12548 32.9023 5.1293 32.5114 5.1293C32.4422 5.1293 32.3816 5.13795 32.321 5.1466C32.2605 5.15525 32.1999 5.16391 32.1307 5.16391V17.1375C32.1879 17.1375 32.224 17.148 32.2566 17.1574C32.2831 17.1651 32.3072 17.1721 32.3384 17.1721C32.7754 17.1721 33.2163 17.176 33.6585 17.1798C34.5467 17.1875 35.4401 17.1952 36.318 17.1721Z"
        fill="black"
      ></path>
      <path
        d="M53.2403 3.81436C53.2403 3.57212 53.2403 3.36449 53.2057 3.12225C53.1019 2.53395 52.7559 2.04946 52.1676 1.87643C51.5447 1.6688 50.9564 1.77262 50.4373 2.22249C49.9528 2.63776 49.849 3.19146 49.849 3.81436C49.849 8.72839 49.849 13.6424 49.849 18.5565C49.849 20.2521 49.1569 21.6364 47.7726 22.6399C46.9421 23.2629 45.9731 23.5743 44.9003 23.5743C43.8622 23.6089 43.17 24.3356 43.17 25.3738C43.2046 26.3428 43.9314 27.0349 44.9349 27.0349C45.9039 27.0349 46.8383 26.8965 47.738 26.5504C51.1294 25.3046 53.2057 22.2247 53.2403 18.4872C53.2403 16.1687 53.2403 13.8155 53.2403 11.4969C53.2403 8.93603 53.2403 6.3752 53.2403 3.81436Z"
        fill="black"
      ></path>
    </svg>
  );
};

export default AdjustLogo;