import React, {useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Divider from '@material-ui/core/Divider';
import { baseUrlAlbum } from './Axi';
import axios from 'axios'
import './CardAlbum.css'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CardAlbum = ({ album, singer, getAlbums }) => {


  const [open, setOpen] = useState(false);
  const [albumc, SetAlbum] = useState(album);


  const handleClickOpen = () => {
    albumc.date = albumc.date.split("T")[0]
    console.log(albumc)
    setOpen(true);
  };

  const handleAlbum = (e) => {
    console.log(albumc)
    SetAlbum({ ...albumc, [e.target.name]: e.target.value })
  }

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    updateAlbum ()
    setOpen(false);

  };

  const deleteAlbum = () => {
    axios.delete(`${baseUrlAlbum}/${albumc._id}`).then(resposne => getAlbums());

  }

  const updateAlbum = () => {
    if(!albumc.name){
      alert("Rellene el nombre del album")
    } else {
      axios.put(`${baseUrlAlbum}/${albumc._id}`,albumc).then(response => getAlbums())
    }
    
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Upate Album</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="idalbum"
            value={albumc.idalbum}
            onChange={(e) => handleAlbum(e)}
            label="Id"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="name"
            value={albumc.name}
            onChange={(e) => handleAlbum(e)}
            label="Name"
            type="email"
            fullWidth
          />
          <input style={{ widht: '200px', marginTop: '25px', border: 'none' }} name="date" onChange={(e) => handleAlbum(e)} value={albumc.date} type="date" />
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
      <div className='headerTableAlbums'>
        <p style={{ width: '12%' }}>{album.idalbum}</p>

        <p style={{ width: '16%' }}>{album.name}</p>
        <p style={{ width: '16%' }}>{album.date.split("T")[0]}</p>
        <div className='actionsAlbums'>
          <Button
            style={{ marginBottom: '5px' }}
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={deleteAlbum}
          >
            Delete
          </Button>
          <Button
            style={{ marginBottom: '5px' }}
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
            onClick={handleClickOpen}
          >
            Update
          </Button>
        </div>

      </div>
      <Divider></Divider>
    </div>

  )
}

export default CardAlbum