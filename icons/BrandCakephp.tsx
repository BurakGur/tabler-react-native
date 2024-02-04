import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandCakephp = ({
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
    className="icon icon-tabler icon-tabler-brand-cakephp"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m12 11 8 2c1.361-.545 2-1.248 2-2V7.2C22 5.435 17.521 4 11.998 4 6.476 4 2 5.435 2 7.2V10c0 1.766 4.478 4 10 4zM12 14v3l8 2c1.362-.547 2-1.246 2-2v-3c0 .754-.638 1.453-2 2zM2 17c0 1.766 4.476 3 9.998 3L12 17c-5.522 0-10-1.734-10-3.5zM2 10v4M22 10v4" />
  </Svg>
);
export default SvgBrandCakephp;
