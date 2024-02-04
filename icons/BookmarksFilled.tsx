import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBookmarksFilled = ({
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
    <Path
      fill="currentColor"
      stroke="none"
      d="M12 6a4 4 0 0 1 4 4v11a1 1 0 0 1-1.514.857L10 19.166l-4.486 2.691a1 1 0 0 1-1.508-.743L4 21V10a4 4 0 0 1 4-4z"
    />
    <Path
      fill="currentColor"
      stroke="none"
      d="M16 2a4 4 0 0 1 4 4v11a1 1 0 0 1-2 0V6a2 2 0 0 0-2-2h-5a1 1 0 0 1 0-2z"
    />
  </Svg>
);
export default SvgBookmarksFilled;
