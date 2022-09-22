import React, { useEffect, useState, useContext } from 'react'
import Axi from './Axi'
import axios from 'axios'
import Divider from '@material-ui/core/Divider';
import CardSinger from './CardSinger'
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Loader from '../PokeApi/Loader';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



import './Singers.css'

const initialSinger = {
    "name": "",
    "age": 0,
    "birthdate": "2022-01-10",
    "albums": []
}

export default function Singers() {

    const [singers, setSingers] = useState([])
    const [singer, setSinger] = useState(initialSinger);
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handleSinger = (e) => {
        setSinger({
            ...singer,
            [e.target.name]: e.target.value
        })
        console.log(singer);
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = () => {

        if (!singer.name) {
            alert("Rellene el nombre del cantante")
        } else {
            
            postSinger()
            setOpen(false);
            setSinger(initialSinger)
        }
    };



    const getSingers = () => {
        setIsLoading(true);
        axios.get(Axi).then((response) => { 
            setSingers(response.data)
            setIsLoading(false)
        })
    }

    const postSinger = () => {
        axios.post(Axi, singer).then(response => getSingers())
    }


    useEffect(() => {
        getSingers();

    }, [])

    return (
        <div className='containerSingers'>
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
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
            <div className='headerSinger'>
                <p>Singers</p>

                <IconButton color="primary" aria-label="add to shopping cart" onClick={handleClickOpen}>
                    <AddCircleOutlineIcon style={{ fontSize: '50px', color: '#060b26' }} />
                </IconButton>
            </div>
            <Divider></Divider>
            {isLoading ? <Loader style={{ color: 'red' }} /> :
                <div >
                    {singers.map(el => <CardSinger key={el._id} datosSinger={el} getSinger={getSingers} />)}
                </div>
            }

        </div>
    )
}
