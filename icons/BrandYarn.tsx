import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandYarn = ({
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
    className="icon icon-tabler icon-tabler-brand-yarn"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M17.845 19.308c-1.268.814-2.41 1.254-3.845 1.692-.176.21-.645.544-.912.588A43 43 0 0 1 8.59 22c-.812.006-1.31-.214-1.447-.554-.115-.279.336-2.054.298-1.964-.157.392-.575 1.287-.997 1.72-.579.6-1.674.4-2.322.051-.71-.386-.07-1.28-.346-1.267S3 18.5 3 17.75c0-.828.622-1.674 1.235-2.211a6.8 6.8 0 0 1 .46-3.143 7.4 7.4 0 0 1 2.208-2.615S5.55 8.247 6.054 6.869c.328-.902.46-.895.567-.935.38-.12.727-.33 1.013-.612.78-.88 1.96-1.438 3.116-1.322 0 0 .781-2.43 1.533-1.936.415.653.671 1.218.967 1.936 0 0 1.15-.7 1.25-.5.514 1.398.487 3.204.211 4.67-.324 1.408-.84 2.691-1.711 3.83-.094.16.98.705 1.722 2.812.686 1.928.278 2.438.278 2.688s.716.144 2.296-.855A5.85 5.85 0 0 1 20.28 15.5c.735-.066.988-.035 1.22 1s-.346 1.406-.744 1.506c0 0-2.09.675-2.911 1.302" />
  </Svg>
);
export default SvgBrandYarn;
