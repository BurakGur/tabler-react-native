import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKeyframeAlignHorizontal = ({
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
    <Path d="M12.816 16.58c-.207.267-.504.42-.816.42s-.61-.153-.816-.42l-2.908-3.748a1.39 1.39 0 0 1 0-1.664l2.908-3.748c.207-.267.504-.42.816-.42s.61.153.816.42l2.908 3.748a1.39 1.39 0 0 1 0 1.664zM3 12h2M19 12h2" />
  </Svg>
);
export default SvgKeyframeAlignHorizontal;
