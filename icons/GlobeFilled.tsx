import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGlobeFilled = ({
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
    className="icon icon-tabler icon-tabler-globe-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M11 4a5 5 0 1 1-4.995 5.217L6 9l.005-.217A5 5 0 0 1 11 4"
    />
    <Path
      fill="currentColor"
      stroke="none"
      d="M14.133 1.502a1 1 0 0 1 1.365-.369A9.015 9.015 0 1 1 5.094 15.755a1 1 0 1 1 1.312-1.51 7.015 7.015 0 1 0 8.096-11.378 1 1 0 0 1-.369-1.365"
    />
    <Path
      fill="currentColor"
      stroke="none"
      d="M11 16a1 1 0 0 1 .993.883L12 17v4a1 1 0 0 1-1.993.117L10 21v-4a1 1 0 0 1 1-1"
    />
    <Path
      fill="currentColor"
      stroke="none"
      d="M15 20a1 1 0 0 1 .117 1.993L15 22H7a1 1 0 0 1-.117-1.993L7 20z"
    />
  </Svg>
);
export default SvgGlobeFilled;
