import { Button, Layout } from 'antd';
import styles from './index.module.scss';

// Creating a sidebar for the settings page
const Sidebar = () => {
  // Inits
  const { Sider } = Layout;
  // JSX
  return (
    <Sider
      className={styles.sidebar}
      style={{
        position: 'absolute',
        background: '#ddd',
        top: '64px',
        bottom: '0px',
        overflowY: 'auto',
      }}
    >
      <div className={styles.sidebar__wrapper}>
        <div className={styles.sidebar__content}>
          <p>DEMO</p>
          <p>DEMO</p>
          <p>DEMO</p>
          <p>DEMO</p>
          <p>DEMO</p>
        </div>
        <div className={styles.sidebar__support}>
          <Button
            type="primary"
            ghost={true}
            className={styles['sidebar__support--button']}
          >
            Get Support
          </Button>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
