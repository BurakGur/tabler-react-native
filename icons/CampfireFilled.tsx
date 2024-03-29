import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCampfireFilled = ({
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
      d="M19.757 16.03a1 1 0 0 1 .597 1.905l-.111.035-16 4a1 1 0 0 1-.597-1.905l.111-.035z"
    />
    <Path
      fill="currentColor"
      stroke="none"
      d="M3.03 16.757a1 1 0 0 1 1.098-.749l.115.022 16 4a1 1 0 0 1-.37 1.962l-.116-.022-16-4a1 1 0 0 1-.727-1.213M13.553 2.106C9.379 4.192 7 7.464 7 11a5 5 0 0 0 10 0c0-1.047-.188-1.808-.606-2.705l-.169-.345-.33-.647C15.274 6.063 15 4.965 15 3a1 1 0 0 0-1.447-.894"
    />
  </Svg>
);
export default SvgCampfireFilled;
