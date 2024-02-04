import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandDribbbleFilled = ({
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
    className="icon icon-tabler icon-tabler-brand-dribbble-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M14.384 14.38a23 23 0 0 1 1.056 4.863l.064.644.126 1.431a10 10 0 0 1-9.15-.98l2.08-2.087.246-.24c1.793-1.728 3.41-2.875 5.387-3.566zm6.09-.783.414.003.981.014a10 10 0 0 1-4.319 6.704l-.054-.605c-.18-2.057-.55-3.958-1.163-5.814 1.044-.182 2.203-.278 3.529-.298zm-7.869-3.181a25 25 0 0 1 1.052 2.098c-2.276.77-4.142 2.053-6.144 3.967l-.355.344-2.236 2.24a10 10 0 0 1-2.917-6.741L2 12l.004-.25H3.1l.467-.002c3.547-.026 6.356-.367 8.938-1.295zm9.388 1.202-1.515-.02c-1.86-.003-3.45.124-4.865.402a26 26 0 0 0-1.163-2.38c1.393-.695 2.757-1.597 4.179-2.75l.428-.354.816-.682a10 10 0 0 1 2.098 5.409zM7.33 3.158 8.596 4.68c1.145 1.398 2.121 2.713 2.949 3.985-2.26.766-4.739 1.052-7.883 1.081L3.1 9.75h-.844A10 10 0 0 1 7.33 3.157zM17 3.34q.796.46 1.483 1.046l-1.025.857c-1.379 1.128-2.688 1.993-4.034 2.649-.89-1.398-1.943-2.836-3.182-4.358l-.474-.574-.485-.584A10 10 0 0 1 17 3.34"
    />
  </Svg>
);
export default SvgBrandDribbbleFilled;
