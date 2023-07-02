/* eslint-disable react-hooks/rules-of-hooks */
import { FC, useState } from 'react';
import { Table } from 'antd';
interface TableProps {
  userColumns: any;
  userDataSource: any;
}
const index: FC<TableProps> = ({ userColumns, userDataSource }) => {
  return (
    <div>
      <Table
        dataSource={userDataSource}
        columns={userColumns}
        pagination={false}
      />
    </div>
  );
};

export default index;
