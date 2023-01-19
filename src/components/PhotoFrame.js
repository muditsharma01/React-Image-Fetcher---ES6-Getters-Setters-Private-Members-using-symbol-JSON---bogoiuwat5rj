import React, { useState, useEffect } from 'react';
import { Loader } from './Loader';

export const PhotoFrame = (props) => {
   const {title, url} = props;
    

    return (
    <div className='photoframe'>
        {url && <img src={url}/>}
        {title && <div className='caption'>{title}</div>}
    </div>
   );
}

export default PhotoFrame;
