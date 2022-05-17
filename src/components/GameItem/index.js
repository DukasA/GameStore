import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './GameItem.module.scss';
import {useDispatch} from 'react-redux';
import { GAMEPAGE_ROUTE } from '../../utils/consts';

function GameItem({props}) {

    //const dispatch = useDispatch();
    const history = useNavigate()

    return (
        <div className={styles.item}>
            <div className={styles.item__header}>
                <img src={props.background_image} alt="bg-image"/>
            </div>
            <div className={styles.item__footer}>
                <h3>{props.name}</h3>
                <div className={styles.info}>
                    <div className={props.rating >= 4 ? styles.rating__height : props.rating < 4 || props.rating >= 3 ? styles.rating__mid : styles.rating__low}><span>{props.rating}</span></div>
                    <div className={styles.realiseDay}>Release day: <span>{props.released}</span></div>
                </div>
            </div>
            <div className={styles.item__popUp}>
                <a onClick={() => history(GAMEPAGE_ROUTE + '/' + props.id)}>View more</a>
            </div>
        </div>
    )
}

export default GameItem;
