import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHelpTriangleFilled = ({
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
      d="M12 1.67c.955 0 1.845.467 2.39 1.247l.105.16 8.114 13.548a2.914 2.914 0 0 1-2.307 4.363l-.195.008H3.882a2.914 2.914 0 0 1-2.582-4.2l.099-.185 8.11-13.538A2.91 2.91 0 0 1 12 1.67M12 15a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15m1.368-6.673a2.98 2.98 0 0 0-3.631.728 1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15 1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673"
    />
  </Svg>
);
export default SvgHelpTriangleFilled;
