import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgZoomCheckFilled = ({
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
      d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-4.943-4.944a8 8 0 0 1-12.49-6.332L2 10l.005-.285A8 8 0 0 1 14 3.072m-.293 4.22a1 1 0 0 0-1.414 0L9 10.586 7.707 9.293l-.094-.083a1 1 0 0 0-1.32 1.497l2 2 .094.083a1 1 0 0 0 1.32-.083l4-4 .083-.094a1 1 0 0 0-.083-1.32z"
    />
  </Svg>
);
export default SvgZoomCheckFilled;
