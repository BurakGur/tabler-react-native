import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCherryFilled = ({
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
      d="m16.588 5.191.058.045.078.074.072.084.013.018a1 1 0 0 1 .182.727l-.022.111-.03.092c-.99 2.725-.666 5.158.679 7.706a4 4 0 1 1-4.613 4.152L13 18l.005-.2a4 4 0 0 1 2.5-3.511c-.947-2.03-1.342-4.065-1.052-6.207q-.249.116-.499.218l.094-.064c-2.243 1.47-3.552 3.004-3.98 4.57a4.5 4.5 0 1 1-7.064 3.906L3 16.5l.005-.212a4.5 4.5 0 0 1 5.2-4.233c.332-1.073.945-2.096 1.83-3.069C8.241 8.89 6.449 8.227 4.68 7l-.268-.19-.051-.04-.046-.04-.044-.044-.04-.046-.04-.05-.032-.047-.035-.06-.053-.11-.038-.116-.023-.117-.005-.042L4 5.98l.01-.118.023-.117.038-.115.03-.066.023-.045.035-.06.032-.046.04-.051.04-.046.044-.044.046-.04.05-.04c4.018-2.922 8.16-2.922 12.177 0z"
    />
  </Svg>
);
export default SvgCherryFilled;
