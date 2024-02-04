import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMedicalCrossFilled = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
  ...props
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
    className=""
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="m11 2-.15.005A2 2 0 0 0 9 4v2.803L6.572 5.402a2 2 0 0 0-2.732.732l-1 1.732-.073.138a2 2 0 0 0 .805 2.594L5.999 12l-2.427 1.402a2 2 0 0 0-.732 2.732l1 1.732.083.132a2 2 0 0 0 2.649.6L9 17.196V20a2 2 0 0 0 2 2h2l.15-.005A2 2 0 0 0 15 20v-2.804l2.428 1.403a2 2 0 0 0 2.732-.732l1-1.732.073-.138a2 2 0 0 0-.805-2.594L18 12l2.428-1.402a2 2 0 0 0 .732-2.732l-1-1.732-.083-.132a2 2 0 0 0-2.649-.6L15 6.802V4a2 2 0 0 0-2-2z"
    />
  </Svg>
);
export default SvgMedicalCrossFilled;
