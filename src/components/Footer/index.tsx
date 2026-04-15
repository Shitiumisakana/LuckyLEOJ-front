import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = 'Lucky';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Shitiumisakana',
          blankTarget: true,
        },
        {
          key: 'Shitiumisakana',
          title: 'Shitiumisakana',
          href: 'https://github.com/Shitiumisakana',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
