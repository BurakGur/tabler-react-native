import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBackspaceFilled = ({
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
    <Path
      fill="currentColor"
      stroke="none"
      d="M20 5a2 2 0 0 1 1.995 1.85L22 7v10a2 2 0 0 1-1.85 1.995L20 19H9a1 1 0 0 1-.608-.206l-.1-.087-5.037-5.04c-.809-.904-.847-2.25-.083-3.23l.12-.144 5-5a1 1 0 0 1 .577-.284L9 5zm-7.489 4.14a1 1 0 0 0-1.301 1.473l.083.094L12.585 12l-1.292 1.293-.083.094a1 1 0 0 0 1.403 1.403l.094-.083L14 13.415l1.293 1.292.094.083a1 1 0 0 0 1.403-1.403l-.083-.094L15.415 12l1.292-1.293.083-.094a1 1 0 0 0-1.403-1.403l-.094.083L14 10.585l-1.293-1.292-.094-.083z"
    />
  </Svg>
);
export default SvgBackspaceFilled;
