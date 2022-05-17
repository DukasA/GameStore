import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchCurrentgGame } from '../../http/fetchCurrentGame';
import styles from './GamePage.module.scss';
import ClipLoader from "react-spinners/ClipLoader";


function GamePage() {

    const params = useParams();

    const [info, setInfo] = useState([]);
    const [showAbout, setShowAbout] = useState(false);

    useEffect(() => {
        fetchCurrentgGame(params.id).then(res => setInfo(res));
    }, []); 

    

    console.log(info);

    return (
        <div>
            {info.length === 0 
            ?
                <div className={styles.spinner}>
                    <ClipLoader color='#fff'/>
                </div> 
            :
                /*======= GAME PAGE HERE ======= */
                <div className={styles.gamePage}>

                    { /*======= BACKGROUND IMAGE =======*/ }
                    <img className={styles.gamePage__backgroundImg} src={info.background_image}></img>

                    { /*======= HEADER =======*/ }
                    <div className={styles.gamePage__header}>
                        <h3>Play time: {info.playtime} hours</h3>
                        <h1>{info.name}</h1>
                    </div>

                    { /*======= SLIDER =======*/ }
                    <div className={styles.gamePage__slider}><img src={info.background_image}></img></div>

                    { /*======= BACKGROUND IMAGE =======*/ }
                    <div className={styles.gamePage__info}>
                        <div className={styles.about}>
                            <span className={styles.about__title}>About:</span><br/>
                            <span className={showAbout ? styles.about__descr : styles.about__descr_nope}>{info.description_raw}</span>
                            <button onClick={() => setShowAbout(!showAbout)}>{showAbout ? 'Read Less' : 'Read More'}</button>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.details__platforms}>
                                <span className={styles.title}>Platforms:</span> 
                                <br/>
                                {info.platforms.map(item => (
                                    <span key={item.platform.id}>{item.platform.name}, </span>
                                ))}
                            </div>
                            <div className={styles.details__genre}>
                                <span className={styles.title}>Genre:</span> 
                                <br/>
                                {info.genres.map(item => (
                                    <span key={item.id}>{item.name}, </span>
                                ))}
                            </div>
                            <div className={styles.details__date}>
                                <span className={styles.title}>Release date:</span> 
                                <br/>
                                <span>{info.released}</span>
                            </div>
                            <div className={styles.details__devs}>
                                <span className={styles.title}>Developer:</span> 
                                <br/>
                                {info.developers.map(item => (
                                    <span key={item.id}>{item.name}</span>
                                ))}
                            </div>
                            <div className={styles.details__publisher}>
                                <span className={styles.title}>Publisher:</span> 
                                <br/>
                                {info.publishers.map(item => (
                                    <span key={item.id}>{item.name}, </span>
                                ))}
                            </div>
                            <div className={styles.details__rating}>
                                <span className={styles.title}>Rating:</span> 
                                <br/>
                                <span>{info.rating}</span>
                            </div>
                            <div className={styles.details__otherGames}>
                                <span className={styles.title}>Other games in the series:</span> 
                                <br/>
                                {info.alternative_names.map(item => (
                                    <span>{item}, </span>
                                ))}
                            </div>
                            <div className={styles.details__tags}>
                                <span className={styles.title}>Tags:</span> 
                                <br/>
                                {info.tags.map(item => (
                                    <span key={item.id}>{item.name}/ </span>
                                ))}
                            </div>
                            <div className={styles.details__website}>
                                <span className={styles.title}>Website:</span> 
                                <br/>
                                <span>{info.website}</span>
                            </div>
                        </div>
                    </div>
                </div>/*END OF GAME PAGE HERE */
        
        }
        </div>
    )
}

export default GamePage;
