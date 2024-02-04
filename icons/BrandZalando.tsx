import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandZalando = ({
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
    className="icon icon-tabler icon-tabler-brand-zalando"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M7.531 21c-.65 0-1-.15-1.196-.27-.266-.157-.753-.563-1.197-1.747A20.6 20.6 0 0 1 4.001 12c.015-2.745.436-5.07 1.137-6.975.444-1.2.93-1.605 1.197-1.763C6.527 3.159 6.88 3 7.53 3c.244 0 .532.022.871.075a19.1 19.1 0 0 1 6.425 2.475h.007a19.6 19.6 0 0 1 5.287 4.508c.783.99.879 1.627.879 1.942s-.096.953-.879 1.943a19.6 19.6 0 0 1-5.287 4.5h-.007a19 19 0 0 1-6.425 2.474A5 5 0 0 1 7.53 21z" />
  </Svg>
);
export default SvgBrandZalando;
