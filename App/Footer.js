import React from 'react';
import PropTypes from 'prop-types';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const Footer = ({style}) => (
    <footer style={style}>
        <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text="Version 1.0.0" />
            </ToolbarGroup>
        </Toolbar>
    </footer>
)

export default Footer;