import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandGraphql = ({
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
    className="icon icon-tabler icon-tabler-brand-graphql"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m5.308 7.265 5.385-3.029M13.308 4.235l5.384 3.03M20 9.5v5M18.693 16.736l-5.385 3.029M10.692 19.765l-5.384-3.03M4 14.5v-5M12.772 4.786l6.121 10.202M18.5 16h-13M5.107 14.988l6.122-10.201M10.5 3.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M10.5 20.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M2.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M2.5 16a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M18.5 16a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M18.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0" />
  </Svg>
);
export default SvgBrandGraphql;
