import React, { useContext, useEffect, useState } from 'react'
import albumss from '../../sources/albums.svg'
import AlbumsContext from './mernContext/AlbumsContext'
import CardAlbum from './CardAlbum'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './Albums.css'
import Axi, { baseUrlAlbum } from './Axi'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Loader from '../PokeApi/Loader';


const initialAlbum = {
    "idalbum": 0,
    "name": "",
    "date": "2022-01-10",
    "singer": ""
}


const Albums = () => {

    const { albums, setAlbums } = useContext(AlbumsContext)
    const [album, SetAlbum] = useState(initialAlbum);
    const [isLoading, setIsLoading] = useState(false);

    const [open, setOpen] = useState(false);

    const { singer } = useContext(AlbumsContext);


    const getSinger = () => {
        // axios.get(`${Axi}/${albums[0].singer}`).then(response => SetSinger(response.data))
    }
    const getAlbums = () => {
        setIsLoading(true)
        axios.get(`${Axi}/${singer._id}`).then(response => {
            setAlbums(response.data.albums)
            setIsLoading(false)
        })
    }

    const postAlbum = () => {
        if(!album.name){
            alert("Rellene el nombre del album")
        } else {
        
            album.singer = singer._id
            console.log(album)
            axios.post(`${baseUrlAlbum}`,album).then(response => {
                SetAlbum(initialAlbum);
                getAlbums()})
            
        }
        
    }

    const handleAlbum = (e) => {
        console.log(album)
        SetAlbum({ ...album, [e.target.name]: e.target.value })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAdd = () => {
        postAlbum()
        setOpen(false);

    };


    if (albums.length == 0) {
        return (
            <div style={{ width: '70%' }}>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add a new Album to {singer.name}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="idalbum"
                            value={album.idalbum}
                            onChange={(e) => handleAlbum(e)}
                            label="Id"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="name"
                            value={album.name}
                            onChange={(e) => handleAlbum(e)}
                            label="Name"
                            type="email"
                            fullWidth
                        />

                        <input style={{ widht: '200px', marginTop: '25px', border: 'none' }} name="date" onChange={(e) => handleAlbum(e)} value={album.date} type="date" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleAdd} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
                <div className='headerAlbum'>
                    <div>Albums of {singer.name}</div>
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={handleClickOpen}>
                        <AddCircleOutlineIcon style={{ fontSize: '50px', color: '#060b26' }} />
                    </IconButton>
                </div>
                <img style={{ width: '65%', display: 'block', margin: 'auto' }} src={albumss} />
            </div>
        )
    }

    return (
        <div className='containerAlbums'>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a new Album to {singer.name}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="idalbum"
                        value={album.idalbum}
                        onChange={(e) => handleAlbum(e)}
                        label="Id"
                        type="number"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        value={album.name}
                        onChange={(e) => handleAlbum(e)}
                        label="Name"
                        type="email"
                        fullWidth
                    />

                    <input style={{ widht: '200px', marginTop: '25px', border: 'none' }} name="date" onChange={(e) => handleAlbum(e)} value={album.date} type="date" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>

            <div className='headerAlbum'>
                <div>Albums of {singer.name}</div>
                <IconButton color="primary" aria-label="add to shopping cart" onClick={handleClickOpen}>
                    <AddCircleOutlineIcon style={{ fontSize: '50px', color: '#060b26' }} />
                </IconButton>
            </div>
            <Divider></Divider>
            <div className='headerTableAlbums'>
                <h4 style={{ width: '12%' }}>Id</h4>
                <h4 style={{ width: '16%' }}>Name</h4>
                <h4 style={{ width: '16%' }}>Date realised</h4>
                <h4 style={{ width: '12%' }}>Actions</h4>
            </div>
            <Divider></Divider>
            {isLoading?<Loader />:<div> {albums.map(el => <CardAlbum key={el.id} album={el} singer={singer} getAlbums={getAlbums}></CardAlbum>)}</div>}
           
        </div>
    )
}

export default Albums