import {useState} from 'react'

import React from 'react'
import SearchBar from './SearchBar'
const emails = [
    {
        id: 'email-01',
        title: 'Retención en la fuente'
    },{
        id: 'email-02',
        title: 'Requisitos para cambio'
    },{
        id: 'email-03',
        title: 'Proximos eventos'
    },{
        id: 'email-04',
        title: 'Publicidad evento de remate'
    },{
        id: 'email-05',
        title: 'Participación encuestas'
    }
]


const calender = [
    {
        id: 'calender-01',
        title: 'Sesión de seguimiento'
    },{
        id: 'calender-02',
        title: 'Revisión de propuestas'
    },{
        id: 'calender-03',
        title: 'Evento de donación'
    },{
        id: 'calender-04',
        title: 'Juanta semanal de equipo'
    },{
        id: 'calender-05',
        title: 'Trabajo'
    }
]

const people = [{
    id: 'people-01',
    title: 'Juan Perez'
},{
    id: 'people-02',
    title: 'Marcos Rivas'
},{
    id: 'people-03',
    title: 'Dila'
},{
    id: 'people-04',
    title: 'Yeslie Enriquez'
},{
    id: 'people-05',
    title: 'Nicolas Vazcones'
}]

const Search = () => {
  const [data, setData] = useState([...people, ...calender, ...emails])
  const [selection, setSelection] = useState(null);
  const [currentOpetion, setCurrentOption] = useState('all')  
  
  function handleClick(e){
    const op = e.target.name;
    switch(op){
        case 'all':
            setData([...people, ...calender, ...emails]);
            setCurrentOption("all");
            break;
        case 'people':
            setData([...people]);
            setCurrentOption("people");
            break;
        case 'calendar':
            setData([...calender]);
            setCurrentOption("calendar");
            break;   
        case 'emails':
            setData([...emails]);
            setCurrentOption("emails")   
            break;
        default:
    }
  }
  return (
    <div>
        <button onClick={handleClick} name='all'>All</button>
        <button onClick={handleClick} name='people'>People</button>
        <button onClick={handleClick} name='calendar'>Calendar</button>
        <button onClick={handleClick} name='emails'>Emails</button>

        <SearchBar items={data} onItemsSelected={()=>{}}></SearchBar>


    </div>
  )
}

export default Search