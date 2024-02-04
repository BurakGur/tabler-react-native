import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPanoramaVerticalOff = ({
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
    className="icon icon-tabler icon-tabler-panorama-vertical-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M7 3h10.53c.693 0 1.18.691.935 1.338q-1.647 4.347-1.425 8.692m.828 4.847q.258.888.595 1.778A1 1 0 0 1 17.529 21h-11c-.692 0-1.208-.692-.962-1.34q2.545-6.73.619-13.46M3 3l18 18" />
  </Svg>
);
export default SvgPanoramaVerticalOff;
