import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSchoolBell = ({
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
    <Path d="M4 17a3 3 0 0 0 3 3M14.805 6.37l2.783-2.784a2 2 0 1 1 2.829 2.828L17.633 9.2" />
    <Path d="M16.505 7.495a5.105 5.105 0 0 1 .176 7.035l-.176.184-1.867 1.867a3.48 3.48 0 0 0-1.013 2.234l-.008.23v.934c0 .327-.13.64-.36.871a.51.51 0 0 1-.652.06l-.07-.06-9.385-9.384a.51.51 0 0 1 0-.722c.198-.198.456-.322.732-.353l.139-.008h.933c.848 0 1.663-.309 2.297-.864l.168-.157 1.867-1.867.16-.153a5.105 5.105 0 0 1 7.059.153" />
  </Svg>
);
export default SvgSchoolBell;
