import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGuitarPickFilled = ({
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
      d="M12 2c-1.613 0-2.882.104-3.825.323l-.23.057C4.926 3.088 3 4.883 3 8c0 3.367 1.939 8.274 4.22 11.125q.48.6 1.03 1.158l.367.36a4.904 4.904 0 0 0 6.752.011 15 15 0 0 0 1.41-1.528C19.27 16.013 21 11.832 21 8c0-3.025-1.813-4.806-4.71-5.562l-.266-.066C15.088 2.122 13.743 2 12 2"
    />
  </Svg>
);
export default SvgGuitarPickFilled;
