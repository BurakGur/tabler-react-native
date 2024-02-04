import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBulbFilled = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zM12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1M21 11a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7a1 1 0 0 1 0-1.414M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1 3 3 0 0 1-6 0 1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8 1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6"
    />
  </Svg>
);
export default SvgBulbFilled;
