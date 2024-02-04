import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFrustum = ({
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
    className="icon icon-tabler icon-tabler-frustum"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m18.402 5.508 2.538 10.158a1.99 1.99 0 0 1-1.064 2.278L12.84 21.31a1.95 1.95 0 0 1-1.682 0l-7.035-3.365a1.99 1.99 0 0 1-1.064-2.278L5.598 5.508a1.98 1.98 0 0 1 1.11-1.328l4.496-2.01a1.95 1.95 0 0 1 1.59 0l4.496 2.01c.554.246.963.736 1.112 1.328" />
    <Path d="m18 4.82-5.198 2.324a1.96 1.96 0 0 1-1.602 0L6 4.819M12 7.32V21.5" />
  </Svg>
);
export default SvgFrustum;
