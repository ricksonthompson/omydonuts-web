import React from 'react';
import { GiDonut } from 'react-icons/gi'
import { BiHomeCircle } from 'react-icons/bi'

interface ISidebarData {
  title: string
  path: string
  icon: any
  cName: string
}

export const SidebarData: ISidebarData[] = [
  {
    title: 'Home',
    path: '/',
    cName: 'nav-text',
    icon: BiHomeCircle
  },
  {
  cName: 'nav-text',
    title: 'Donuts',
    path: '/donuts',
    icon: GiDonut
  }
]
