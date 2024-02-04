import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlienFilled = ({
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
    className="icon icon-tabler icon-tabler-alien-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M12.004 2c4.942 0 8.288 2.503 8.85 6.444a12.88 12.88 0 0 1-2.163 9.308 11.8 11.8 0 0 1-3.51 3.356c-1.982 1.19-4.376 1.19-6.373-.008a11.8 11.8 0 0 1-3.489-3.34 12.8 12.8 0 0 1-2.171-9.306C3.712 4.504 7.058 2 12.004 2m1.913 14.6a1 1 0 0 0-1.317-.517l-.146.055a1.5 1.5 0 0 1-1.054-.055l-.11-.04a1 1 0 0 0-.69 1.874 3.5 3.5 0 0 0 2.8 0 1 1 0 0 0 .517-1.317m-5.304-6.39a1 1 0 0 0-1.32 1.497l2 2 .094.083a1 1 0 0 0 1.32-1.497l-2-2zm8.094.083a1 1 0 0 0-1.414 0l-2 2-.083.094a1 1 0 0 0 1.497 1.32l2-2 .083-.094a1 1 0 0 0-.083-1.32"
    />
  </Svg>
);
export default SvgAlienFilled;
