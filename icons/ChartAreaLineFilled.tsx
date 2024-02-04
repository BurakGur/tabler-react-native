import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartAreaLineFilled = ({
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
      d="M15.22 9.375a1 1 0 0 1 1.393-.165l.094.083 4 4a1 1 0 0 1 .284.576L21 14v5a1 1 0 0 1-.883.993L20 20H3.978l-.11-.009-.11-.02-.107-.034-.105-.046-.1-.059-.094-.07-.06-.055-.072-.082-.064-.089-.054-.096-.016-.035-.04-.103-.027-.106-.015-.108-.004-.11.009-.11.019-.105q.015-.06.035-.112l.046-.105.059-.1 4-6a1 1 0 0 1 1.165-.39l.114.05 3.277 1.638z"
    />
    <Path
      fill="currentColor"
      stroke="none"
      d="M15.232 3.36a1 1 0 0 1 1.382-.15l.093.083 4 4a1 1 0 0 1-1.32 1.497l-.094-.083-3.226-3.225-4.299 5.158a1 1 0 0 1-1.1.303l-.115-.049-3.254-1.626L4.8 12.6a1 1 0 0 1-1.295.269L3.4 12.8a1 1 0 0 1-.269-1.295L3.2 11.4l3-4a1 1 0 0 1 1.137-.341l.11.047 3.291 1.645z"
    />
  </Svg>
);
export default SvgChartAreaLineFilled;
