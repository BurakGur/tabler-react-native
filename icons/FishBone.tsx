import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFishBone = ({
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
    className="icon icon-tabler icon-tabler-fish-bone"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M16.69 7.44A6.97 6.97 0 0 0 15 12a6.97 6.97 0 0 0 1.699 4.571c1.914-.684 3.691-2.183 5.301-4.565-1.613-2.384-3.394-3.883-5.312-4.565M2 9.504a41 41 0 0 0 2.422 2.504A40 40 0 0 0 2 14.506M18 11v.01M4.422 12H15M7 10v4M11 8v8" />
  </Svg>
);
export default SvgFishBone;
