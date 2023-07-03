/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from 'antd';
import { FC } from 'react';
import styles from './index.module.scss';

interface TableProps {
  userColumns: any;
  userDataSource: any;
}
const index: FC<TableProps> = ({ userColumns, userDataSource }) => {
  return (
    <div className={styles.table}>
      <Table
        dataSource={userDataSource}
        columns={userColumns}
        pagination={false}
      />
    </div>
  );
};

export default index;
