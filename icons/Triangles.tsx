import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTriangles = ({
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
    className="icon icon-tabler icon-tabler-triangles"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9.974 21h8.052a.975.975 0 0 0 .81-1.517l-4.025-6.048a.973.973 0 0 0-1.622 0l-4.025 6.048A.977.977 0 0 0 9.974 21" />
    <Path d="M4.98 16h14.04c.542 0 .98-.443.98-.989a1 1 0 0 0-.156-.534l-7.02-11.023a.974.974 0 0 0-1.648 0l-7.02 11.023a1 1 0 0 0 .294 1.366.97.97 0 0 0 .53.157" />
  </Svg>
);
export default SvgTriangles;
