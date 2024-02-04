import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceVisionPro = ({
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
    className="icon icon-tabler icon-tabler-device-vision-pro"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12 7q1.715 0 3.275.104 1.526.101 2.798.42 1.22.304 2.119.909a3.9 3.9 0 0 1 1.328 1.531c.326.657.48 1.48.48 2.466q.002 1.51-.574 2.707-.562 1.17-1.537 1.848a3.7 3.7 0 0 1-2.16.66q-.764.002-1.382-.21a6 6 0 0 1-1.17-.548 19 19 0 0 1-1.045-.695 9 9 0 0 0-1.001-.63 2.4 2.4 0 0 0-1.13-.301c-.373 0-.75.097-1.132.3q-.475.255-1 .63-.482.345-1.047.695a5.8 5.8 0 0 1-1.168.548q-.62.212-1.378.21a3.7 3.7 0 0 1-2.165-.659q-.976-.68-1.537-1.848-.576-1.196-.574-2.709c-.004-.98.15-1.802.477-2.46a3.9 3.9 0 0 1 1.33-1.531q.9-.604 2.12-.907a16 16 0 0 1 2.8-.423Q10.287 7 12 7" />
  </Svg>
);
export default SvgDeviceVisionPro;
