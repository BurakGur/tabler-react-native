import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBoxAlignTopLeftFilled = ({
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
    className="icon icon-tabler icon-tabler-box-align-top-left-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M10 3H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M15 3a1 1 0 0 1 .117 1.993L14.99 5a1 1 0 0 1-.117-1.993zM20 3a1 1 0 0 1 .117 1.993L19.99 5a1 1 0 0 1-.117-1.993zM20 8a1 1 0 0 1 .117 1.993L19.99 10a1 1 0 0 1-.117-1.993zM20 14a1 1 0 0 1 .117 1.993L19.99 16a1 1 0 0 1-.117-1.993zM4 14a1 1 0 0 1 .117 1.993L3.99 16a1 1 0 0 1-.117-1.993zM20 19a1 1 0 0 1 .117 1.993L19.99 21a1 1 0 0 1-.117-1.993zM15 19a1 1 0 0 1 .117 1.993L14.99 21a1 1 0 0 1-.117-1.993zM9 19a1 1 0 0 1 .117 1.993L8.99 21a1 1 0 0 1-.117-1.993zM4 19a1 1 0 0 1 .117 1.993L3.99 21a1 1 0 0 1-.117-1.993z"
    />
  </Svg>
);
export default SvgBoxAlignTopLeftFilled;
