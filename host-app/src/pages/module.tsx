import Page from '../Page';
import React from 'react';

const RemoteComponent = React.lazy(() => import('remote-app/components'));

const ModulePage = () => (
  <Page title="Module Page">
    <div>Module Page</div>
    <React.Suspense fallback="Loading Component...">
      <RoutedTabs />
    </React.Suspense>
  </Page>
);

export default ModulePage;
