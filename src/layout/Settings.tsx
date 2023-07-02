import { Header, Sidebar } from 'components/settings';
import { Layout } from 'antd';

// General layout for settings page
const Settings = () => {
  // JSX
  return (
    <div>
      <Header />
      <Layout hasSider={true}>
        <Sidebar />
      </Layout>
    </div>
  );
};

export default Settings;
