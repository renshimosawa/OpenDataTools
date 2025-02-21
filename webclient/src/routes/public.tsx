import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { MainLayout } from '../components/Layout';
import { lazyImport } from '../utils/lazyImport';

const { FileUpload } = lazyImport(() => import('../features/upload'), 'FileUpload');
const { DataCategory } = lazyImport(() => import('../features/category'), 'DataCategory');
const { DataManagertest } = lazyImport(
  () => import('../features/datamanagertest'),
  'DataManagertest'
);

const App = () => {
  return (
    <MainLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const publicRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <FileUpload /> },
      { path: '/select-category', element: <DataCategory /> },
      { path: '/datamanagertest', element: <DataManagertest /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
