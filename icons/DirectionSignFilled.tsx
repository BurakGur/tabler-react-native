import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDirectionSignFilled = ({
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
    className="icon icon-tabler icon-tabler-direction-sign-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M10.52 2.614a2.095 2.095 0 0 1 2.835-.117l.126.117 7.905 7.905c.777.777.816 2.013.117 2.836l-.117.126-7.905 7.905a2.094 2.094 0 0 1-2.836.117l-.126-.117-7.907-7.906a2.096 2.096 0 0 1-.115-2.835l.117-.126 7.905-7.905zm5.969 9.535.01-.116-.003-.12-.016-.114-.03-.11-.044-.112-.052-.098-.076-.105-.07-.081-3.5-3.5-.095-.083a1 1 0 0 0-1.226 0l-.094.083-.083.094a1 1 0 0 0 0 1.226l.083.094L13.085 11H8l-.117.007a1 1 0 0 0 0 1.986L8 13h5.085l-1.792 1.793-.083.094a1 1 0 0 0 1.403 1.403l.094-.083 3.5-3.5.097-.112.05-.074.037-.067.05-.112.023-.076z"
    />
  </Svg>
);
export default SvgDirectionSignFilled;
