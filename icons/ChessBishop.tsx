import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChessBishop = ({
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
    className="icon icon-tabler icon-tabler-chess-bishop"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m8 16-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16zM11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9.5 16C7.833 16 7 14.331 7 13q0-5.5 5-7c3.333 1 5 3.427 5 7 0 1.284-.775 2.881-2.325 3H9.5M15 8l-3 3M12 5v1" />
  </Svg>
);
export default SvgChessBishop;
