import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandTwitch = ({
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
    <Path d="M4 5v11a1 1 0 0 0 1 1h2v4l4-4h5.584c.266 0 .52-.105.707-.293l2.415-2.414c.187-.188.293-.442.293-.708V5a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1zM16 8v4M12 8v4" />
  </Svg>
);
export default SvgBrandTwitch;
