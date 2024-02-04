import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareF5Filled = ({
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
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM16 8h-3l-.117.007a1 1 0 0 0-.857.764l-.02.112L12 9v3l.007.117a1 1 0 0 0 .764.857l.112.02L13 13h2v1h-1.033l-.025-.087-.049-.113a1 1 0 0 0-1.893.45c0 .867.63 1.587 1.458 1.726l.148.018.144.006H15l.157-.006a2 2 0 0 0 1.819-1.683l.019-.162L17 14v-1l-.006-.157a2 2 0 0 0-1.683-1.819l-.162-.019L15 11h-1v-1h2l.117-.007a1 1 0 0 0 .857-.764l.02-.112L17 9l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02zm-6 0H8l-.117.007a1 1 0 0 0-.876.876L7 9v6l.007.117a1 1 0 0 0 .876.876L8 16l.117-.007a1 1 0 0 0 .876-.876L9 15v-2h1l.117-.007a1 1 0 0 0 0-1.986L10 11H9v-1h1l.117-.007a1 1 0 0 0 0-1.986z"
    />
  </Svg>
);
export default SvgSquareF5Filled;
