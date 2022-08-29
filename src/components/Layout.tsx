import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto py-4  px-6 sm:px-6 lg:px-8">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
