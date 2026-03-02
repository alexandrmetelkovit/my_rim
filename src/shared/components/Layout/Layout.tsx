import { Header, Footer } from '@/shared/components';

type TLayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: TLayoutProps) => {
  return (
    <>
      <Header />
      <main className='layout'>{children}</main>
      <Footer />
    </>
  );
};
