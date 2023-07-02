import { CloseOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import styles from './index.module.scss';

// Creating the header for the settings page
const Header = () => {
  // Inits
  const { Header } = Layout;
  // JSX
  return (
    <div className={styles.header}>
      <Header
        style={{
          background: '#eee',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <p className={styles.header__title}>Settings</p>
        <CloseOutlined
          style={{
            fontSize: '2rem',
            cursor: 'pointer',
          }}
        />
      </Header>
    </div>
  );
};
export default Header;
