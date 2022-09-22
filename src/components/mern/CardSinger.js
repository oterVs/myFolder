import React, { useContext, useState, useEffect } from 'react';
import './CardSinger.css';
import Avatar from '@material-ui/core/Avatar';
import AlbumsContext from './mernContext/AlbumsContext'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios'
import Axi from './Axi'

const CardSinger = ({ datosSinger, getSinger }) => {

    const { albums, setAlbums, setSinger } = useContext(AlbumsContext)
    const [singer, SetSinger] = useState({})
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(Math.trunc((Math.random() * (20 - 10 + 1))+10));

    const getAlbums = () => {
        axios.get(`${Axi}/${datosSinger._id}`).then(response => {
            setAlbums(response.data.albums);
            setSinger(response.data);
        })
    }

    useEffect(()=>{
        console.log(image)
    })

    const handleSinger = (e) => {
        console.log(singer);
        SetSinger({...singer, [e.target.name]: e.target.value})
    }

    const handleClickOpen = () => {
        SetSinger(datosSinger)
        singer.birthdate = singer.birthdate.split("T")[0]
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };
    const handleAdd = () => {
        if(!singer.name){
            alert("Rellene el nombre del cantante")
        }else {
            updateSinger();
            setOpen(false);
        }
    };
    const updateSinger = () => {
        axios.put(`${Axi}/${datosSinger._id}`,singer).then(response =>  getSinger())
       
    }

    const deleteSinger = () => {
        axios.delete(`${Axi}/${datosSinger._id}`).then(response =>  getSinger())

    }


    return (
        <div className='containerCardSinger' onClick={getAlbums}>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a new Singer</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        value={singer.name}
                        onChange={(e) => handleSinger(e)}
                        label="Name"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="age"
                        value={singer.age}
                        onChange={(e) => handleSinger(e)}
                        label="Age"
                        type="number"
                        fullWidth
                    />
                    <input style={{ widht: '200px', marginTop: '25px', border: 'none' }} name="birthdate" onChange={(e) => handleSinger(e)} value={singer.birthdate} type="date" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
            <Avatar style={{ width: '60px', height: '60px' }} alt="Remy Sharp" src={`https://randomuser.me/api/portraits/women/${image}.jpg`} />
            <div className='infoSinger'>
                <p style={{ fontSize: 23 }}>{datosSinger.name}</p>
                <p style={{ fontSize: 18, color: 'silver' }}>{datosSinger.birthdate.split("T")[0]}</p>
            </div>
            <div className='actionsSinger'>
                <Button
                    style={{marginBottom: '5px'}}
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={deleteSinger}
                >
                    Delete
                </Button>
                <Button
                    style={{marginBottom: '5px'}}
                    onClick={handleClickOpen}
                    variant="contained"
                    color="default"
                    startIcon={<CloudUploadIcon />}
                >
                    Update
                </Button>
            </div>
        </div>
    )
}

export default CardSinger