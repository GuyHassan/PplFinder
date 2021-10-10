import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { ReactComponent as SvgLogo } from '../../assets/powerlink_logo.svg'
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  const [value, setValue] = useState(() => history.location.pathname === '/favorite' ? 1 : 0);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} onClick={() => history.push('/')} />
        <Tab label="Favorites" index={1} onClick={() => history.push('/favorite')} />
        <SvgLogo style={{ position: 'absolute', right: '-5' }} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
