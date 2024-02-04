import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandCashapp = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
}: {
  size: number,
  stroke: number,
  color: string,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className="icon icon-tabler icon-tabler-brand-cashapp"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M17.1 8.648a.57.57 0 0 1-.761.011 5.68 5.68 0 0 0-3.659-1.34c-1.102 0-2.205.363-2.205 1.374 0 1.023 1.182 1.364 2.546 1.875 2.386.796 4.363 1.796 4.363 4.137 0 2.545-1.977 4.295-5.204 4.488l-.295 1.364a.56.56 0 0 1-.546.443H9.305l-.102-.011a.57.57 0 0 1-.432-.67l.318-1.444a7.43 7.43 0 0 1-3.273-1.784v-.011a.545.545 0 0 1 0-.773l1.137-1.102c.214-.2.547-.2.761 0a5.5 5.5 0 0 0 3.852 1.5c1.478 0 2.466-.625 2.466-1.614s-1-1.25-2.886-1.954c-2-.716-3.898-1.728-3.898-4.091 0-2.75 2.284-4.091 4.989-4.216l.284-1.398A.545.545 0 0 1 13.066 3h2.023l.114.012a.544.544 0 0 1 .42.647l-.307 1.557a8.5 8.5 0 0 1 2.818 1.58l.023.022c.216.228.216.569 0 .773z" />
  </Svg>
);
export default SvgBrandCashapp;
