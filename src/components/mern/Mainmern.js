import React, { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import Singers from './Singers'

import Albums from './Albums'
import { AlbumsProvider } from './mernContext/AlbumsContext';

const Mainmern = () => {
    return (
        <div style={{ width: '100%', display: 'flex' }}>
            <AlbumsProvider>
                <Singers />
                <Albums />
            </AlbumsProvider>
        </div>
    )
}

export default Mainmern