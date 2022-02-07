import React from 'react';

const DecrementIcon = ({ fill = 'var(--app-tint)' }) => {
  return (
    <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="14" height="2" rx="1" fill={fill} />
    </svg>
  );
};

export default DecrementIcon;
