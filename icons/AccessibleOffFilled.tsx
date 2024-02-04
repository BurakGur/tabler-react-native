import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAccessibleOffFilled = ({
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
    className="icon icon-tabler icon-tabler-accessible-off-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-1.051 6.844a1 1 0 0 0-1.152-.663l-.113.03-2.684.895-2.684-.895-.113-.03a1 1 0 0 0-.628 1.884l.109.044L11 12.22v.976l-1.832 2.75-.06.1a1 1 0 0 0 .237 1.21l.1.076.101.06a1 1 0 0 0 1.21-.237l.076-.1L12 15.303l1.168 1.752.07.093a1 1 0 0 0 1.653-1.102l-.059-.1L13 13.196v-.977l2.316-.771.109-.044a1 1 0 0 0 .524-1.221zM12 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
    />
  </Svg>
);
export default SvgAccessibleOffFilled;
