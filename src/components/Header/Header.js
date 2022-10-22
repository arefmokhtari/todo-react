

import React from 'react';

const Header = ({title}) => title === 'ptag'? <p>{title}</p>:<h2>{title}</h2>;

export default Header;