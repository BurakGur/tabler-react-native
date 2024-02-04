import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLadle = ({
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
    className="icon icon-tabler icon-tabler-ladle"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 14v1a6 6 0 1 0 12 0V6a3 3 0 0 1 6 0" />
    <Path d="M9 16c-.663 0-1.3-.036-1.896-.102l-.5-.064C4.481 15.526 3 14.821 3 14c0-.82 1.482-1.526 3.603-1.834l.5-.064A17 17 0 0 1 9 12c.663 0 1.3.036 1.896.102l.5.064C13.519 12.474 15 13.179 15 14c0 .82-1.482 1.526-3.603 1.834l-.5.064A17 17 0 0 1 9 16" />
  </Svg>
);
export default SvgLadle;
