import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandGoogleMaps = ({
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
    className="icon icon-tabler icon-tabler-brand-google-maps"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9.5 9.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M6.428 12.494l7.314-9.252M10.002 7.935 7.065 5.39M17.693 6.593l-8.336 9.979" />
    <Path d="M17.591 6.376c.472.907.715 1.914.709 2.935a7.3 7.3 0 0 1-.72 3.18 19 19 0 0 1-2.089 3c-.784.933-1.49 1.93-2.11 2.98-.314.62-.568 1.27-.757 1.938-.121.36-.277.591-.622.591-.315 0-.463-.136-.626-.593a10.6 10.6 0 0 0-.779-1.978 18 18 0 0 0-1.423-2.091c-.877-1.184-2.179-2.535-2.853-4.071A7.1 7.1 0 0 1 5.7 9.3a6.23 6.23 0 0 1 1.476-4.055A6.25 6.25 0 0 1 11.987 3a6.5 6.5 0 0 1 1.918.284 6.26 6.26 0 0 1 3.686 3.092" />
  </Svg>
);
export default SvgBrandGoogleMaps;
