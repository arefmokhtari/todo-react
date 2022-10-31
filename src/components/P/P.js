

import React from 'react';

const style = {
    textAlign: 'center',
    color: 'gray',
    paddingTop: '10px',
}

export default ({children}) => <p style={style}>{children || 'input empty !'}</p>;