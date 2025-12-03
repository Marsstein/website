import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ChineseLayout: React.FC = () => {
  return (
    <>
      <Helmet>
        <html lang="zh-CN" />
        <meta property="og:locale" content="zh_CN" />
      </Helmet>
      <div className="chinese-layout">
        <Outlet />
      </div>
    </>
  );
};

export default ChineseLayout;
