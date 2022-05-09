import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Horarios',
    path: '/reports',
    icon: <AiIcons.AiOutlineFieldTime/>,
    cName: 'nav-text'
  },
  {
    title: 'Grupo',
    path: '/products',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Ayuda',
    path: '/ayuda',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
