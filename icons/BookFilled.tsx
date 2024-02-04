import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBookFilled = ({
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
      d="M12.088 4.82a10 10 0 0 1 9.412.314 1 1 0 0 1 .493.748L22 6v13a1 1 0 0 1-1.5.866 8 8 0 0 0-8 0 1 1 0 0 1-1 0 8 8 0 0 0-7.733-.148l-.327.18-.103.044-.049.016-.11.026-.061.01L3 20h-.042l-.11-.012-.077-.014-.108-.032-.126-.056-.095-.056-.089-.067-.06-.056-.073-.082-.064-.089-.022-.036-.032-.06-.044-.103-.016-.049-.026-.11-.01-.061-.004-.049L2 19V6a1 1 0 0 1 .5-.866 10 10 0 0 1 9.412-.314l.088.044z"
    />
  </Svg>
);
export default SvgBookFilled;
