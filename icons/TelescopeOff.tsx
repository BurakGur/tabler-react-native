import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTelescopeOff = ({
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
    <Path d="m6 21 6-5 6 5M12 13v8M8.238 8.264l-4.183 2.51c-1.02.614-1.357 1.898-.76 2.906l.165.28c.52.88 1.624 1.266 2.605.91l6.457-2.34m2.907-1.055 4.878-1.77a1.023 1.023 0 0 0 .565-1.455l-2.62-4.705a1.087 1.087 0 0 0-1.447-.42l-.056.032-6.016 3.61M14 5l3 5.5M3 3l18 18" />
  </Svg>
);
export default SvgTelescopeOff;
