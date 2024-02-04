import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCactusFilled = ({
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
    className="icon icon-tabler icon-tabler-cactus-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M7 22a1 1 0 0 1-.117-1.993L7 20h2v-6a4 4 0 0 1-3.995-3.8L5 10V9a1 1 0 0 1 1.993-.117L7 9v1a2 2 0 0 0 1.85 1.995L9 12V5a3 3 0 0 1 5.995-.176L15 5v10a2 2 0 0 0 1.995-1.85L17 13V8a1 1 0 0 1 1.993-.117L19 8v5a4 4 0 0 1-3.8 3.995L15 17v3h2a1 1 0 0 1 .117 1.993L17 22z"
    />
  </Svg>
);
export default SvgCactusFilled;
