import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBucketDroplet = ({
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
    <Path d="m5 16 1.465 1.638a2 2 0 1 1-3.015.099zM13.737 9.737c2.299-2.3 3.23-5.095 2.081-6.245s-3.945-.217-6.244 2.082-3.231 5.095-2.082 6.244 3.946.218 6.245-2.081" />
    <Path d="M7.492 11.818c.362.362.768.676 1.208.934l6.895 4.047c1.078.557 2.255-.075 3.692-1.512s2.07-2.614 1.512-3.692q-.557-1.077-4.047-6.895a6 6 0 0 0-.934-1.208" />
  </Svg>
);
export default SvgBucketDroplet;
