import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMovieOff = ({
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
    className="icon icon-tabler icon-tabler-movie-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362.359-.859.58-1.408.58H6a2 2 0 0 1-2-2V6c0-.539.213-1.028.56-1.388M8 8v12M16 4v8m0 4v4M4 8h4M4 16h4M4 12h8m4 0h4M16 8h4M3 3l18 18" />
  </Svg>
);
export default SvgMovieOff;
