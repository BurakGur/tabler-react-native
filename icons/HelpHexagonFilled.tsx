import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHelpHexagonFilled = ({
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
      d="M10.425 1.414a3.33 3.33 0 0 1 3.026-.097l.19.097 6.775 3.995.096.063.092.077.107.075a3.22 3.22 0 0 1 1.266 2.188l.018.202.005.204v7.284c0 1.106-.57 2.129-1.454 2.693l-.17.1-6.803 4.302c-.918.504-2.019.535-3.004.068l-.196-.1-6.695-4.237a3.23 3.23 0 0 1-1.671-2.619L2 15.502V8.217c0-1.106.57-2.128 1.476-2.705zM12 15a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15m1.368-6.673a2.98 2.98 0 0 0-3.631.728 1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15 1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673"
    />
  </Svg>
);
export default SvgHelpHexagonFilled;
