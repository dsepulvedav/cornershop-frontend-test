

import React from 'react';

const RefreshIcon = ({ fill = 'var(--grey)' }) => {
  return (
    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.26562 9.09375C7.51562 9.09375 7.72656 9.01562 7.875 8.85156L11.0781 5.61719C11.2734 5.42969 11.3594 5.21094 11.3594 4.96094C11.3594 4.72656 11.2656 4.49219 11.0781 4.3125L7.88281 1.05469C7.71875 0.882812 7.51562 0.796875 7.26562 0.796875C6.78125 0.796875 6.40625 1.19531 6.40625 1.6875C6.40625 1.92969 6.49219 2.11719 6.64844 2.28125L8.34375 3.94531C8.03125 3.90625 7.71094 3.88281 7.39844 3.88281C3.50781 3.88281 0.398438 6.99219 0.398438 10.9062C0.398438 14.8125 3.54688 17.9609 7.44531 17.9609C11.3516 17.9609 14.4922 14.8125 14.4922 10.9062C14.4922 10.3594 14.1172 9.98438 13.5859 9.98438C13.0703 9.98438 12.7109 10.3594 12.7109 10.9062C12.7109 13.8203 10.3672 16.1719 7.44531 16.1719C4.53125 16.1719 2.1875 13.8203 2.1875 10.9062C2.1875 7.94531 4.49219 5.60938 7.39844 5.60938C7.84375 5.60938 8.25 5.64062 8.60938 5.69531L6.64844 7.63281C6.49219 7.79688 6.40625 7.98438 6.40625 8.21875C6.40625 8.71094 6.78125 9.09375 7.26562 9.09375Z" fill={fill}/>
    </svg>

  );
};

export default RefreshIcon;