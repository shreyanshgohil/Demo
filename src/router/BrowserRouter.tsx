import { Settings } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

// Creating browser router
const router = createBrowserRouter([
  {
    path: '/settings',
    element: <Settings />,
  },
]);

export default router;
