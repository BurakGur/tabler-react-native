import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlower = ({
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
    className="icon icon-tabler icon-tabler-flower"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <Path d="M12 2a3 3 0 0 1 3 3q0 .843-.776 2.64L13.5 9l1.76-1.893q.748-.899 1.27-1.205a2.97 2.97 0 0 1 4.07 1.099 3.01 3.01 0 0 1-1.09 4.098q-.561.326-1.846.535L15 12l2.4.326c1 .145 1.698.337 2.11.576A3.01 3.01 0 0 1 20.6 17a2.97 2.97 0 0 1-4.07 1.098q-.522-.303-1.27-1.205L13.5 15l.724 1.36q.775 1.799.776 2.64a3 3 0 0 1-6 0q0-.843.776-2.64L10.5 15l-1.76 1.893q-.748.9-1.27 1.205A2.97 2.97 0 0 1 3.4 17a3.01 3.01 0 0 1 1.09-4.098q.561-.326 1.846-.536L9 12l-2.4-.325c-1-.145-1.698-.337-2.11-.576A3.01 3.01 0 0 1 3.4 7a2.97 2.97 0 0 1 4.07-1.099q.522.304 1.27 1.205L10.5 9Q9 5.562 9 5a3 3 0 0 1 3-3" />
  </Svg>
);
export default SvgFlower;
