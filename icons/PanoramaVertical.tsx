import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPanoramaVertical = ({
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
    className="icon icon-tabler icon-tabler-panorama-vertical"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M18.463 4.338q-2.898 7.658 0 15.317A1 1 0 0 1 17.529 21h-11c-.692 0-1.208-.692-.962-1.34q2.898-7.66 0-15.321C5.321 3.691 5.81 3 6.502 3H17.53c.693 0 1.18.691.935 1.338z" />
  </Svg>
);
export default SvgPanoramaVertical;
