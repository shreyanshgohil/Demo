import { userColumns, userDataSource } from 'constants/DATA';
import { SettingsLayout } from 'layout';
import { Table } from 'components/settings/';
import { Pagination } from 'antd';
import { useState } from 'react';
// settings page
const Settings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(userDataSource.slice(0, 10));
  const paginationChangeHandler = (pageNo: number, paginationSize: number) => {
    setCurrentPage(pageNo);
    const data = userDataSource;
    setData(userDataSource.slice((pageNo - 1) * 10, pageNo * 10));
  };
  return (
    <>
      <div>
        <SettingsLayout />
      </div>
      <div
        style={{
          marginLeft: '200px',
          padding: '50px',
          maxHeight: 'calc(100vh - 64px)',
          overflowY: 'auto',
        }}
      >
        <Table userDataSource={data} userColumns={userColumns} />
        <Pagination
          total={userDataSource.length}
          current={currentPage}
          onChange={paginationChangeHandler}
        />
      </div>
    </>
  );
};

export default Settings;
