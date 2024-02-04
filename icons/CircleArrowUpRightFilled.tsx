import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCircleArrowUpRightFilled = ({
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
    className="icon icon-tabler icon-tabler-circle-arrow-up-right-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M15 8H9l-.117.007A1 1 0 0 0 8 9l.007.117A1 1 0 0 0 9 10h3.584l-4.291 4.293-.083.094a1 1 0 0 0 1.497 1.32L14 11.414V15l.007.117A1 1 0 0 0 16 15V9l-.007-.117-.029-.149-.035-.105-.054-.113-.071-.111a1 1 0 0 0-.097-.112l-.09-.08-.096-.067-.098-.052-.11-.044-.112-.03-.126-.017z"
    />
  </Svg>
);
export default SvgCircleArrowUpRightFilled;
