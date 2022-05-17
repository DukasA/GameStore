import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Sidebar.module.scss';


function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebar__linksList}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/reviews'>Reviews</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;
