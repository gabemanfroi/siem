import { ReactNode } from 'react';
import { DefaultPageContainer } from 'modules/Shared/components/Containers';
import Header from 'modules/Shared/components/Header';
import { Sidebar } from 'modules/Shared/components/index';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <DefaultPageContainer>
    <Header />
    <Sidebar />
    {children}
  </DefaultPageContainer>
);

export default DefaultLayout;
