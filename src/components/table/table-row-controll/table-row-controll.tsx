import { FC, useState } from 'react';
import { FileIcon, FolderIcon, SubFolderIcon, TrashIcon } from '../../icons';
import './table-row-controll.style.scss';

const iconsList = [<FolderIcon />, <SubFolderIcon/>, <FileIcon/>, <TrashIcon />];

export const TableRowControll: FC<{ level: number }> = ({ level }) => {
  const [isOpen, setIsOpen] = useState(false);

  const listClass = `table__controll table__controll_${level} ${isOpen && 'table__controll_open'}`

  const controlsToRender: JSX.Element[] = [ ...iconsList.slice(level - 1, iconsList.length) ];

  return(
    <ul
      className={listClass}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      { controlsToRender.map((item, index) => {
        return(
          <li className="table__controll-item" key={index}>
            { item }
          </li>
        )
      }) }
    </ul>
  );
}