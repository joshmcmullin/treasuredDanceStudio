import React from 'react';
import {Link, useResolvedPath, useMatch} from 'react-router-dom';

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return (
    <li className={isActive ? 'active nav-link' : 'nav-link'}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default CustomLink;