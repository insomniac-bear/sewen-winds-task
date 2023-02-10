import { Button } from '../../button/button';
import './control-menu.style.scss'

export default function ControlMenu() {
  return(
      <ul className="header__menu">
        <li className="header__menu-item">
          <Button
            onClick={() => {} }
            icon='TileIcon'
          />
        </li>
        <li className="header__menu-item">
          <Button
            onClick={() => {} }
            icon='BackIcon'
          />
        </li>
      </ul>
  )
};
