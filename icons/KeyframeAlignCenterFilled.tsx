import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKeyframeAlignCenterFilled = ({
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
      d="M12 19a1 1 0 0 1 .993.883L13 20v2a1 1 0 0 1-1.993.117L11 22v-2a1 1 0 0 1 1-1M12 6c-.629 0-1.214.301-1.606.807l-2.908 3.748a2.395 2.395 0 0 0-.011 2.876l2.919 3.762c.39.505.977.807 1.606.807s1.214-.301 1.606-.807l2.908-3.748a2.395 2.395 0 0 0 .011-2.876l-2.919-3.762A2.03 2.03 0 0 0 12 6M12 1a1 1 0 0 1 .993.883L13 2v2a1 1 0 0 1-1.993.117L11 4V2a1 1 0 0 1 1-1M5 11a1 1 0 0 1 .117 1.993L5 13H3a1 1 0 0 1-.117-1.993L3 11zM21 11a1 1 0 0 1 .117 1.993L21 13h-2a1 1 0 0 1-.117-1.993L19 11z"
    />
  </Svg>
);
export default SvgKeyframeAlignCenterFilled;
