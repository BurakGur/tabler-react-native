import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandAws = ({
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
    className="icon icon-tabler icon-tabler-brand-aws"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M17 18.5a15.2 15.2 0 0 1-7.37 1.44A14.6 14.6 0 0 1 3 17M19.5 21c.907-1.411 1.451-3.323 1.5-5-1.197-.773-2.577-.935-4-1M3 11V6.5a1.5 1.5 0 0 1 3 0V11M3 9h3M9 5l1.2 6L12 7l1.8 4L15 5M18 10.25c0 .414.336.75.75.75H20a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75" />
  </Svg>
);
export default SvgBrandAws;
