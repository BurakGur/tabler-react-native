import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandAmongUs = ({
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
    <Path d="M10.646 12.774c-1.939.396-4.467.317-6.234-.601-2.454-1.263-1.537-4.66 1.423-4.982 2.254-.224 3.814-.354 5.65.214.835.256 1.93.569 1.355 3.281-.191 1.067-1.07 1.904-2.194 2.088" />
    <Path d="M5.84 7.132q.125-.848.392-1.661c.456-.936 1.095-2.068 3.985-2.456a22.5 22.5 0 0 1 2.867.08c1.776.14 2.643 1.234 3.287 3.368.339 1.157.46 2.342.629 3.537v11l-12.704-.019c-.552-2.386-.262-5.894.204-8.481M17 10c.991.163 2.105.383 3.069.67.255.13.52.275.534.505.264 3.434.57 7.448.278 9.825H17" />
  </Svg>
);
export default SvgBrandAmongUs;
