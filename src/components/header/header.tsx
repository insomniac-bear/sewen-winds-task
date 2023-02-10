import ControlMenu from './control-menu/control-menu';
import { UserMenu } from './user-menu/user-menu';
import './header.style.scss';

export default function Header() {
  return(
    <header className="header">
      <ControlMenu />
      <UserMenu />
    </header>
  );
} 