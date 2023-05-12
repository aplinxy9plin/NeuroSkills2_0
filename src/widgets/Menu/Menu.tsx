import React, { ReactNode } from 'react';

type MenuItem = {
  link: string;
  label: string;
  icon?: ReactNode;
};
interface MenuProps {
  items: MenuItem[];
}

export const Menu = () => {
  return <div>dcd</div>;
};
