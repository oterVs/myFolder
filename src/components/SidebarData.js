

import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        tittle: 'Sobre mi',
        path: '/MyFolder',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        tittle: 'Proyectos Pequeños',
        path: '/reviews',
        icon: <FaIcons.FaCalculator />,
        cName: 'nav-text'
    },
    {
        tittle: 'CRUD MERN',
        path: '/crudmern',
        icon: <FaIcons.FaCalculator />,
        cName: 'nav-text'
    }
]