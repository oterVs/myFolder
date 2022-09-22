import { createContext, useState } from "react";


const AlbumsContext = createContext();

function AlbumsProvider ({children}){

    const [albums, setAlbums] = useState([]);
    const [singer, setSinger] = useState({})

    const data = {albums, setAlbums, singer, setSinger}

    return(
        <AlbumsContext.Provider value={data}>{children}</AlbumsContext.Provider>
    )
}


export {AlbumsProvider}
export default AlbumsContext