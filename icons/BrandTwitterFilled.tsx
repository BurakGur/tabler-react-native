import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandTwitterFilled = ({
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
      d="M14.058 3.41c-1.807.767-2.995 2.453-3.056 4.38L11 7.972l-.243-.023C8.365 7.68 6.259 6.437 4.813 4.418a1 1 0 0 0-1.685.092l-.097.186-.049.099c-.719 1.485-1.19 3.29-1.017 5.203l.03.273c.283 2.263 1.5 4.215 3.779 5.679l.173.107-.081.043c-1.315.663-2.518.952-3.827.9-1.056-.04-1.446 1.372-.518 1.878 3.598 1.961 7.461 2.566 10.792 1.6 4.06-1.18 7.152-4.223 8.335-8.433l.127-.495c.238-.993.372-2.006.401-3.024l.003-.332.393-.779.44-.862.214-.434.118-.247c.265-.565.456-1.033.574-1.43l.014-.056.008-.018c.22-.593-.166-1.358-.941-1.358l-.122.007a1 1 0 0 0-.231.057l-.086.038a7.5 7.5 0 0 1-.88.36l-.356.115-.271.08-.772.214c-1.336-1.118-3.144-1.254-5.012-.554l-.211.084z"
    />
  </Svg>
);
export default SvgBrandTwitterFilled;
