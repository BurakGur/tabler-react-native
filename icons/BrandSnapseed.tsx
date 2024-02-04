import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandSnapseed = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
  ...props
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
    className=""
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8.152 3.115a.46.46 0 0 0-.609 0C4.6 5.695 3.014 8.556 3 11.493c0 2.928 1.586 5.803 4.543 8.392a.46.46 0 0 0 .61 0c2.957-2.589 4.547-5.464 4.547-8.392s-1.6-5.799-4.548-8.378" />
    <Path d="m8 20 12.09-.011c.503 0 .91-.434.91-.969v-6.063c0-.535-.407-.968-.91-.968h-7.382" />
  </Svg>
);
export default SvgBrandSnapseed;
