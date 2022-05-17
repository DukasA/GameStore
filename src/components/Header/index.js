import React,{useState} from 'react';
import styles from './Header.module.scss';
import {IoIosSearch} from 'react-icons/io';
import Input from '../Input/index';
import {Link} from 'react-router-dom';

function Header() {

    const [title, setTitle] = useState('');

    return (
        <div className={styles.header}>
            <div className={styles.header__logo}><Link to='/'>PLUGI</Link></div>
            <div className={styles.header__searchBar}>
                <IoIosSearch/>
                <Input value={title} setValue={setTitle} type='text'  placeholder='Search' />
            </div>
            <div className={styles.header__linksBar}>
                <Link to='/login'>LOG IN</Link>
                <Link to='/sign-up'>SIGN UP</Link>
            </div>
        </div>
    )
}

export default Header;
