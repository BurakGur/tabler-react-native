import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowBigDownLinesFilled = ({
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
      d="m9 8-.117.007A1 1 0 0 0 8 9v1.999L5.414 11A2 2 0 0 0 4 14.414L10.586 21a2 2 0 0 0 2.828 0L20 14.414a2 2 0 0 0 .434-2.18l-.068-.145A2 2 0 0 0 18.586 11L16 10.999V9a1 1 0 0 0-1-1zM15 2a1 1 0 0 1 .117 1.993L15 4H9a1 1 0 0 1-.117-1.993L9 2zM15 5a1 1 0 0 1 .117 1.993L15 7H9a1 1 0 0 1-.117-1.993L9 5z"
    />
  </Svg>
);
export default SvgArrowBigDownLinesFilled;
