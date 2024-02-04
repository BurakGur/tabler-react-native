import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarsFilled = ({
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
      d="M17.657 12.007a1.39 1.39 0 0 0-1.103.765l-.855 1.723-1.907.277c-.52.072-.96.44-1.124.944l-.038.14c-.1.465.046.954.393 1.29l1.377 1.337-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708-.895 1.708.896a1.39 1.39 0 0 0 1.462-.105l.112-.09a1.39 1.39 0 0 0 .442-1.272l-.325-1.891 1.38-1.339c.38-.371.516-.924.352-1.427l-.051-.134a1.39 1.39 0 0 0-1.073-.81l-1.907-.278-.853-1.722A1.39 1.39 0 0 0 17.8 12zM6.057 12.007a1.39 1.39 0 0 0-1.103.765l-.855 1.723-1.907.277c-.52.072-.96.44-1.124.944l-.038.14c-.1.465.046.954.393 1.29L2.8 18.483l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708-.895 1.708.896a1.39 1.39 0 0 0 1.462-.105l.112-.09a1.39 1.39 0 0 0 .442-1.272L9.6 18.483l1.38-1.339c.38-.371.516-.924.352-1.427l-.051-.134a1.39 1.39 0 0 0-1.073-.81L8.3 14.494l-.853-1.722A1.39 1.39 0 0 0 6.2 12zM11.857 2.007a1.39 1.39 0 0 0-1.103.765l-.855 1.723-1.907.277c-.52.072-.96.44-1.124.944l-.038.14c-.1.465.046.954.393 1.29L8.6 8.483l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465L12 10.946l1.709.896a1.39 1.39 0 0 0 1.462-.105l.112-.09a1.39 1.39 0 0 0 .442-1.272L15.4 8.483l1.38-1.339c.38-.371.516-.924.352-1.427l-.051-.134a1.39 1.39 0 0 0-1.073-.81L14.1 4.494l-.853-1.722A1.39 1.39 0 0 0 12 2z"
    />
  </Svg>
);
export default SvgStarsFilled;
