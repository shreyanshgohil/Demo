import { Pagination } from 'antd';
import { Table } from 'components/settings/';
import { userColumns, userDataSource } from 'constants/DATA';
import { SettingsLayout } from 'layout';
import { useState } from 'react';
import styles from './index.module.scss';

// settings page
const Settings = () => {
  // Inits
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(userDataSource.slice(0, 10));

  // Handle the pagination for the table
  const paginationChangeHandler = (pageNo: number, paginationSize: number) => {
    setCurrentPage(pageNo);
    const data = userDataSource;
    setData(userDataSource.slice((pageNo - 1) * 10, pageNo * 10));
  };

  // JSX
  return (
    <div className={styles.settings}>
      <SettingsLayout>
        <div className={styles.settings__body}>
          <div className={styles['settings__body--table']}>
            <Table userDataSource={data} userColumns={userColumns} />
          </div>
          <div className={styles['settings__body--pagination']}>
            <Pagination
              total={userDataSource.length}
              current={currentPage}
              onChange={paginationChangeHandler}
            />
          </div>
        </div>
      </SettingsLayout>
    </div>
  );
};

export default Settings;
