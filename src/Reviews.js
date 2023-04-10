import React, {useState} from "react";
import people from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Rewievs = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    
    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const radnomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        console.log(randomNumber);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }


    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FontAwesomeIcon icon={faQuoteRight} />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <button className="random-btn" onClick={radnomPerson}>Suprise me</button>
            </div>
        </article>
    );
}

export default Rewievs;