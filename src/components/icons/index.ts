import { FC } from 'react';
import { BackIcon } from './back-icon';
import { FileIcon } from './file-icon';
import { FolderIcon } from './folder-icon';
import { ProjectIcon } from './project-icon';
import { SubFolderIcon } from './sub-folder-icon';
import { TileIcon } from './tile-icon';
import { TrashIcon } from './trash-icon';
import type { TIcon } from './icon.types';

export type TIcons = {
  BackIcon: FC<TIcon>;
  FileIcon: FC<TIcon>;
  FolderIcon: FC<TIcon>;
  ProjectIcon: FC<TIcon>;
  SubFolderIcon: FC<TIcon>;
  TileIcon: FC<TIcon>;
  TrashIcon: FC<TIcon>;
}

export {
  BackIcon,
  FileIcon,
  FolderIcon,
  ProjectIcon,
  SubFolderIcon,
  TileIcon,
  TrashIcon,
};
