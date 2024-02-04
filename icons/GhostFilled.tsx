import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGhostFilled = ({
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
      d="M12 3a8 8 0 0 1 7.996 7.75L20 11l-.001 6.954.01.103a2.78 2.78 0 0 1-1.468 2.618l-.163.08c-1.053.475-2.283.248-3.129-.593l-.137-.146a.65.65 0 0 0-1.024 0 2.65 2.65 0 0 1-4.176 0 .65.65 0 0 0-.512-.25c-.2 0-.389.092-.55.296a2.78 2.78 0 0 1-4.859-2.005l.008-.091L4 11l.004-.25A8 8 0 0 1 12 3m2.82 10.429a1 1 0 0 0-1.391-.25 2.5 2.5 0 0 1-2.858 0 1 1 0 0 0-1.142 1.642 4.5 4.5 0 0 0 5.142 0 1 1 0 0 0 .25-1.392zM10.01 9l-.127.007A1 1 0 0 0 10 11l.127-.007A1 1 0 0 0 10.01 9m4 0-.127.007A1 1 0 0 0 14 11l.127-.007A1 1 0 0 0 14.01 9"
    />
  </Svg>
);
export default SvgGhostFilled;
