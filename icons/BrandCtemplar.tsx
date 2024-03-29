import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandCtemplar = ({
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
    <Path d="M6.04 14.831 10.5 10.5M12.555 20.82c4.55-3.456 7.582-8.639 8.426-14.405a1.67 1.67 0 0 0-.934-1.767A19.65 19.65 0 0 0 12 3a19.65 19.65 0 0 0-8.047 1.647 1.67 1.67 0 0 0-.934 1.767c.844 5.766 3.875 10.95 8.426 14.406a.95.95 0 0 0 1.11 0" />
    <Path d="M20 5c-2 0-4.37 3.304-8 6.644C8.37 8.304 6 5 4 5M17.738 15 13.5 10.5" />
  </Svg>
);
export default SvgBrandCtemplar;
