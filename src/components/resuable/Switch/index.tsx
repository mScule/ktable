import clsx from "clsx";
import style from "./style.module.css";

import { ReactNode } from "react";

type Props = {
  left: ReactNode;
  right: ReactNode;
  selection: boolean;
  onSelect: () => {};
};

export default function Switch({ left, right, selection, onSelect }: Props) {
  return (
    <button className={style.switch} onClick={onSelect}>
      <div
        className={clsx(
          style.option,
          style.left,
          !selection && style.selected
        )}>
        {left}
      </div>
      <div
        className={clsx(
          style.option,
          style.right,
          selection && style.selected
        )}>
        {right}
      </div>
    </button>
  );
}
