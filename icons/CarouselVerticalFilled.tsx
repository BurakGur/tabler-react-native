import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCarouselVerticalFilled = ({
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
      d="M18 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M16 19a2 2 0 0 1 1.995 1.85L18 21v1a1 1 0 0 1-1.993.117L16 22v-1H8v1a1 1 0 0 1-1.993.117L6 22v-1a2 2 0 0 1 1.85-1.995L8 19zM17 1a1 1 0 0 1 .993.883L18 2v1a2 2 0 0 1-1.85 1.995L16 5H8a2 2 0 0 1-1.995-1.85L6 3V2a1 1 0 0 1 1.993-.117L8 2v1h8V2a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgCarouselVerticalFilled;
