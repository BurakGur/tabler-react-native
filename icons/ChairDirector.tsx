import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChairDirector = ({
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
    className="icon icon-tabler icon-tabler-chair-director"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m6 21 12-9M6 12l12 9M5 12h14M6 3v9M18 3v9M6 8h12M6 5h12" />
  </Svg>
);
export default SvgChairDirector;
