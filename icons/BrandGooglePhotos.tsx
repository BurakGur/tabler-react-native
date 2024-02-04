import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandGooglePhotos = ({
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
    className="icon icon-tabler icon-tabler-brand-google-photos"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M7.5 7C9.985 7 12 8.974 12 11.409V12H3.603a.6.6 0 0 1-.426-.173.59.59 0 0 1-.177-.418C3 8.974 5.015 7 7.5 7M16.5 17c-2.485 0-4.5-1.974-4.5-4.409V12h8.397c.333 0 .603.265.603.591C21 15.026 18.985 17 16.5 17" />
    <Path d="M7 16.5c0-2.485 1.972-4.5 4.405-4.5H12v8.392a.6.6 0 0 1-.173.431.58.58 0 0 1-.422.177C8.972 21 7 18.985 7 16.5M17 7.5c0 2.485-1.972 4.5-4.405 4.5H12V3.603a.6.6 0 0 1 .175-.428.58.58 0 0 1 .42-.175C15.028 3 17 5.015 17 7.5" />
  </Svg>
);
export default SvgBrandGooglePhotos;
