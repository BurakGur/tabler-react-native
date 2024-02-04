import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFrustumOff = ({
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
    className="icon icon-tabler icon-tabler-frustum-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m7.72 3.728 3.484-1.558a1.95 1.95 0 0 1 1.59 0l4.496 2.01c.554.246.963.736 1.112 1.328l2.538 10.158c.103.412.07.832-.075 1.206m-2.299 1.699-5.725 2.738a1.95 1.95 0 0 1-1.682 0l-7.035-3.365a1.99 1.99 0 0 1-1.064-2.278l2.52-10.08" />
    <Path d="m18 4.82-5.198 2.324a1.96 1.96 0 0 1-1.602 0M12 7.32V8m0 4v9.5M3 3l18 18" />
  </Svg>
);
export default SvgFrustumOff;
