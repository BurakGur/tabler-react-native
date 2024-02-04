import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const Svg3DCubeSphere = ({
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
    className="icon icon-tabler icon-tabler-3d-cube-sphere"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m6 17.6-2-1.1V14M4 10V7.5l2-1.1M10 4.1 12 3l2 1.1M18 6.4l2 1.1V10M20 14v2.5l-2 1.12M14 19.9 12 21l-2-1.1M12 12l2-1.1M18 8.6l2-1.1M12 12v2.5M12 18.5V21M12 12l-2-1.12M6 8.6 4 7.5" />
  </Svg>
);
export default Svg3DCubeSphere;
