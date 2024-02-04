import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandSwift = ({
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
    className="icon icon-tabler icon-tabler-brand-swift"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M20.547 15.828C21.877 11.702 19.163 6.307 14.5 3c-.135-.096 2.39 6.704 1.308 9.124Q12.578 9.944 8 6l-.5 2L4 7q6.54 7.122 8.56 8.841C7.902 17.93 1.91 14.863 2 15c1.016 1.545 6 6 11 6 2 0 3.788-.502 4.742-1.389.005-.005.432-.446 1.378-.17q.755.221 2.88 1.559v-1.507c0-1.377-.515-2.67-1.453-3.665" />
  </Svg>
);
export default SvgBrandSwift;
