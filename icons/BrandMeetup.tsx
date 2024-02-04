import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandMeetup = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M5.455 10.82C6.39 8.657 8.5 7 11 7c2.104 0 2.844 1.915 2 4l-2 6M6.981 7 3 16.914" />
    <Path d="M13 11c.937-2.16 3.071-3.802 5.42-3.972 2.104 0 3.128 1.706 2.284 3.792l-2.454 6.094C17.397 18.59 19 19.5 21 19" />
  </Svg>
);
export default SvgBrandMeetup;
