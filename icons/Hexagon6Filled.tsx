import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHexagon6Filled = ({
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
      d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v6l.005.15a2 2 0 0 0 1.838 1.844L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15v-2l-.005-.15a2 2 0 0 0-1.838-1.844L13 11h-2V9h2l.007.117A1 1 0 0 0 15 9a2 2 0 0 0-1.85-1.995zm0 6v2h-2v-2z"
    />
  </Svg>
);
export default SvgHexagon6Filled;
