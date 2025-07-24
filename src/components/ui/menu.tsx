import React from 'react';
import { cn } from '@/lib/utils';

export const Menu: React.FC<{ items: { label: string; onClick: () => void }[] }> = ({ items }) => {
  return (
    <div className={cn('bg-white shadow-md rounded-md p-2')}> {/* Add your styles here */}
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className={cn('block w-full text-left px-4 py-2 hover:bg-gray-100')}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Menu;
