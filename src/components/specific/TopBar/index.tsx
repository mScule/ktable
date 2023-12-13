import style from "./style.module.css";

import { TbGridPattern as Icon } from "react-icons/tb";

import Button from "../../resuable/Button";

export default function TopBar() {
  return (
    <nav className={style.topBar}>
      <div className={style.logo}>
        K
        <Icon size={16} />
      </div>

      <div className={style.options}>
        <Button>New</Button>
        <Button>Open</Button>
        <Button>Save</Button>
        <Button>Save as</Button>
      </div>
    </nav>
  );
}