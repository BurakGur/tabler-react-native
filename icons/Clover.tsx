import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClover = ({
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
    <Path d="M12 10 8.603 6.56a2.104 2.104 0 0 1 0-2.95 2.04 2.04 0 0 1 2.912 0L12 4l.485-.39a2.04 2.04 0 0 1 2.912 0 2.104 2.104 0 0 1 0 2.95zM12 14l-3.397 3.44a2.104 2.104 0 0 0 0 2.95 2.04 2.04 0 0 0 2.912 0L12 20l.485.39a2.04 2.04 0 0 0 2.912 0 2.104 2.104 0 0 0 0-2.95zM14 12l3.44-3.397a2.104 2.104 0 0 1 2.95 0 2.04 2.04 0 0 1 0 2.912L20 12l.39.485a2.04 2.04 0 0 1 0 2.912 2.104 2.104 0 0 1-2.95 0zM10 12 6.56 8.603a2.104 2.104 0 0 0-2.95 0 2.04 2.04 0 0 0 0 2.912L4 12l-.39.485a2.04 2.04 0 0 0 0 2.912 2.104 2.104 0 0 0 2.95 0z" />
  </Svg>
);
export default SvgClover;
