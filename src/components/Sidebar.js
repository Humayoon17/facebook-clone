import React from 'react';
import SidebarRow from './SidebarRow';
import Logo from '../assets/images/facebook.svg';
import { FaUserFriends, FaUsers } from 'react-icons/fa';
import {
  MdAccessTime,
  MdEvent,
  MdExpandMore,
  MdLocalHospital,
  MdOndemandVideo,
} from 'react-icons/md';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow image={Logo} title={'Username'} />
      <SidebarRow Icon={MdLocalHospital} title='COVID-19 Information Center' />
      <SidebarRow Icon={FaUserFriends} title='Friends' />
      <SidebarRow Icon={FaUsers} title='Groups' />
      <SidebarRow Icon={MdOndemandVideo} title='Videos' />
      <SidebarRow Icon={MdEvent} title='Events' />
      <SidebarRow Icon={MdAccessTime} title='Memories' />
      <SidebarRow Icon={MdExpandMore} title='See More' />
    </div>
  );
}
