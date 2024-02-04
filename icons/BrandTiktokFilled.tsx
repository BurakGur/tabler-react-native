import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandTiktokFilled = ({
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
    className="icon icon-tabler icon-tabler-brand-tiktok-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M16.083 2H12a1 1 0 0 0-1 1v11.5a1.5 1.5 0 1 1-2.519-1.1l.12-.1A1 1 0 0 0 9 12.5V8.174A1 1 0 0 0 7.77 7.2 7.5 7.5 0 0 0 9.5 22l.243-.005A7.5 7.5 0 0 0 17 14.5v-2.7l.311.153c1.122.53 2.333.868 3.59.993A1 1 0 0 0 22 11.95V7.917a1 1 0 0 0-.834-.986 5.005 5.005 0 0 1-4.097-4.096A1 1 0 0 0 16.083 2"
    />
  </Svg>
);
export default SvgBrandTiktokFilled;
