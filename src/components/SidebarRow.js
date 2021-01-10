import React from 'react';
import Avatar from './Avatar';

export default function SidebarRow({ image, Icon, title }) {
  return (
    <div className='sidebar-row'>
      {image && <Avatar src={image} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}
