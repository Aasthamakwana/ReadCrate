import React, { useState, useEffect } from 'react';
import { API_URL } from './API';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from "../Loader/Loader";
import { Rating } from 'react-simple-star-rating';
import './Exp.css';



const ExpBookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [readMore, setReadMore] = useState(false);
    const linkName = readMore ? 'Read Less' : 'Read More';

    useEffect(() => {
        setLoading(true);
        axios.get(API_URL).then(res => {
            console.log(res.data);
            setBooks(res.data);
            setLoading(false);
        })
            .catch(err => console.log(err));
    }, [])

    if (loading) return <Loading />;

    return (
        <div className='expbooklist'>
            {books.map((book) => (
                <div key={book.id} className="expbook">
                    <div className="expimage">
                        <img src={book.image_url} alt="#" />
                    </div>
                    <div className='expbookinfo'>
                        <p><span>Title: </span>{book.title}</p>
                        <p><span>Author: </span>{book.authors}</p>
                        <p><span>Edition: </span>{book.edition ? `${book.edition}` : "None"}</p>
                        <p><span>Description: </span>

                            {readMore ? `${book.description}` : `${book.description}`.substring(0, 250)}
                            {readMore ? " " : "..."}
                            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h4>{linkName}</h4></a></p>
                        <p><span>Pages: </span>{book.num_pages}</p>
                        <p><span>Genre: </span>{book.genres}</p>
                        <p><span>Rating: </span> {book.rating}</p>
                        <p><Rating initialValue={book.rating} size={20} fillColor='orange' emptyColor='gray' allowFraction='false' className='foo' />
                        ({book.rating_count})</p>
                    </div>
                </div >
            ))}
        </div >
    )
}

export default ExpBookList;