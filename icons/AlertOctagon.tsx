import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlertOctagon = ({
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
    className="icon icon-tabler icon-tabler-alert-octagon"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m12.802 2.165 5.575 2.389c.48.206.863.589 1.07 1.07l2.388 5.574c.22.512.22 1.092 0 1.604l-2.389 5.575c-.206.48-.589.863-1.07 1.07l-5.574 2.388c-.512.22-1.092.22-1.604 0l-5.575-2.389a2.04 2.04 0 0 1-1.07-1.07l-2.388-5.574a2.04 2.04 0 0 1 0-1.604l2.389-5.575c.206-.48.589-.863 1.07-1.07l5.574-2.388a2.04 2.04 0 0 1 1.604 0M12 8v4M12 16h.01" />
  </Svg>
);
export default SvgAlertOctagon;
