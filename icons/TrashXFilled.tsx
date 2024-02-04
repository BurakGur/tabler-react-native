import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTrashXFilled = ({
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
    className="icon icon-tabler icon-tabler-trash-x-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M20 6a1 1 0 0 1 .117 1.993L20 8h-.081L19 19a3 3 0 0 1-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 0 1-.117-1.993L4 6zm-9.489 5.14a1 1 0 0 0-1.218 1.567L10.585 14l-1.292 1.293-.083.094a1 1 0 0 0 1.497 1.32L12 15.415l1.293 1.292.094.083a1 1 0 0 0 1.32-1.497L13.415 14l1.292-1.293.083-.094a1 1 0 0 0-1.497-1.32L12 12.585l-1.293-1.292-.094-.083zM14 2a2 2 0 0 1 2 2 1 1 0 0 1-1.993.117L14 4h-4l-.007.117A1 1 0 0 1 8 4a2 2 0 0 1 1.85-1.995L10 2z"
    />
  </Svg>
);
export default SvgTrashXFilled;
