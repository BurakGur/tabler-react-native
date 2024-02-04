import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWhirl = ({
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
    <Path d="M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
    <Path d="M12 21c-3.314 0-6-2.462-6-5.5S8.686 10 12 10" />
    <Path d="M21 12c0 3.314-2.462 6-5.5 6S10 15.314 10 12" />
    <Path d="M12 14c3.314 0 6-2.462 6-5.5S15.314 3 12 3" />
    <Path d="M14 12c0-3.314-2.462-6-5.5-6S3 8.686 3 12" />
  </Svg>
);
export default SvgWhirl;
