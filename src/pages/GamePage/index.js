import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {Link} from 'react-router-dom'
import { fetchCurrentgGame } from '../../http/fetchCurrentGame';
import styles from './GamePage.module.scss';
import ClipLoader from "react-spinners/ClipLoader";
import {fetchGameScreenshots} from '../../http/fetchGameScreenshots';

function GamePage() {

    const params = useParams();
    const history = useNavigate();

    const [info, setInfo] = useState([]);
    const [media, setMedia] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const [showAbout, setShowAbout] = useState(false);

    
    useEffect(() => {
        setTimeout(() => {
            fetchCurrentgGame(params.id).then(res => setInfo(res));
        },1000) 
    }, []); 
    
    useEffect(() => {
        fetchGameScreenshots(params.id).then(res => setMedia(res.results));
    }, []);



    const prevSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 0) {
            setSlideIndex(media.length - 1);
        }
    }

    const nextSlide = () => {
        if (slideIndex === media.length - 1) {
            setSlideIndex(0);
        } else if (slideIndex !== media.length - 1) {
            setSlideIndex(slideIndex + 1)
        }
    }

    
    console.log(info)

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
                    <Link to={'/'}>{'<-'}Go Home</Link>
                        <h3>Play time: {info.playtime} hours</h3>
                        <h1>{info.name}</h1>
                    </div>

                    { /*======= SLIDER =======*/ }
                    <div className={styles.gamePage__slider}>
                        <img src={media[slideIndex].image}></img>
                        
                        <div className={styles.sliderBtns}>
                            <button onClick={prevSlide}>{'<'}</button>
                            <button onClick={nextSlide}>{'>'}</button>
                        </div>
                    </div>

                    { /*======= INFO SECTION =======*/ }
                    <div className={styles.gamePage__info}>

                        { /*======= ABOUT SECTION =======*/ }
                        <div className={styles.about}>
                            <span className={styles.about__title}>About:</span><br/>
                            <span className={showAbout ? styles.about__descr : styles.about__descr_nope}>{info.description_raw}</span>
                            <button onClick={() => setShowAbout(!showAbout)}>{showAbout ? 'Read Less' : 'Read More'}</button>
                        </div>

                        { /*======= DETAILS SECTION =======*/ }
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
                                {info.alternative_names.map((item,index) => (
                                    <span key={index}>{item}, </span>
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
