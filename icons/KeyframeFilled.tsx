import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKeyframeFilled = ({
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
      d="M12 4a2.6 2.6 0 0 0-2 .957l-4.355 5.24a2.85 2.85 0 0 0-.007 3.598l4.368 5.256c.499.6 1.225.949 1.994.949a2.6 2.6 0 0 0 2-.957l4.355-5.24a2.85 2.85 0 0 0 .007-3.598l-4.368-5.256A2.6 2.6 0 0 0 12 4"
    />
  </Svg>
);
export default SvgKeyframeFilled;
