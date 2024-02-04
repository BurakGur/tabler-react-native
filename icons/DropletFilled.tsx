import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDropletFilled = ({
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
      d="M10.708 2.372a2.4 2.4 0 0 0-.71.686l-4.892 7.26c-1.981 3.314-1.22 7.466 1.767 9.882 2.969 2.402 7.286 2.402 10.254 0 2.987-2.416 3.748-6.569 1.795-9.836l-4.919-7.306c-.722-1.075-2.192-1.376-3.295-.686"
    />
  </Svg>
);
export default SvgDropletFilled;
