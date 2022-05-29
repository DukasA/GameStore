import React, { useEffect, useState, useRef } from 'react';
import { fetchGamesList } from '../../http/fetchGamesList';
import GameItem from '../../components/GameItem/index';
import styles from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

function Home() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const [page, setPage] = useState(1);
    const ref = useRef();

    useEffect(() => {
        fetchGamesList(page)
        .then(res => dispatch({type:"LOAD", payload: res.results}));
    },[page]);


    const next = () => {
        setPage(page + 1);
        window.scrollTo(0, ref);
    }

    const prev = () => {
        setPage(page - 1);
        window.scrollTo(0, ref);
    }

    return (
        <div className={styles.home}>
            <h1 ref={ref} className={styles.home__title}>New and Trending</h1>
            <h3 className={styles.home__subtitle}>Based on rating and release date</h3>
            <div className={styles.home__filter}>

                {/* THIS SECTION WILL WORK LATER */}
                {/* <div>Order by:</div> 
                <select>
                    {filterData.map(item => (
                        <option key={item.id}>{item.name}</option>
                    ))}
                </select>
                <select>
                    <option>Xbox</option>
                    <option>PS4</option>
                    <option>PC</option>
                </select> */}
            </div>
            {data.length > 0 ?
                <div>
                    <div className={styles.home__itemsWrapper}>
                        {data.map(item => (
                            <GameItem key={item.id} props={item} />
                        ))}
                    </div>
                    <div className={styles.home__pagination}>
                        <ul>
                            <li>{page <= 1 ? <button onClick={prev} disabled>{'<'}</button> : <button onClick={prev}>{'<'}</button>}</li>
                            <li>{page}</li>
                            <li onClick={next}>{'>'}</li>
                        </ul>
                    </div>
                </div>
                :
                
                <div className={styles.spinner}>
                    <ClipLoader color='#fff'/>
                </div>
            }
        </div>
    )
}

export default Home;
