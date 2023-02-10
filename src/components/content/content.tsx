import { FC } from 'react';
import { Table } from '../table';
import { ContentHeader } from './content-header/content-header';

export const Content: FC = () => {

  return(
    <main>
      <ContentHeader />
      <Table />
    </main>
  );
}