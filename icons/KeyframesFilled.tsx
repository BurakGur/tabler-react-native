import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKeyframesFilled = ({
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
      d="M8 4a2.6 2.6 0 0 0-2 .957l-4.355 5.24a2.85 2.85 0 0 0-.007 3.598l4.368 5.256C6.505 19.651 7.23 20 8 20a2.6 2.6 0 0 0 2-.957l4.355-5.24a2.85 2.85 0 0 0 .007-3.598L9.994 4.949A2.6 2.6 0 0 0 8 4M16.382 4.214a1 1 0 0 1 1.32.074l.084.094 4.576 5.823c.808.993.848 2.396.13 3.419l-.12.158-4.586 5.836a1 1 0 0 1-1.644-1.132l.072-.104 4.596-5.85a.845.845 0 0 0 .06-.978l-.07-.1-4.586-5.836a1 1 0 0 1 .168-1.404"
    />
    <Path
      fill="currentColor"
      stroke="none"
      d="M12.382 4.214a1 1 0 0 1 1.32.074l.084.094 4.576 5.823c.808.993.848 2.396.13 3.419l-.12.158-4.586 5.836a1 1 0 0 1-1.644-1.132l.072-.104 4.596-5.85a.845.845 0 0 0 .06-.978l-.07-.1-4.586-5.836a1 1 0 0 1 .168-1.404"
    />
  </Svg>
);
export default SvgKeyframesFilled;
