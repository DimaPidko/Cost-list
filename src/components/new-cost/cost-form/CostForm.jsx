/* eslint-disable react/prop-types */
import { useState } from 'react';

import styles from './CostForm.module.sass';


const CostForm = (props) => {
    const [userInput, setUserInput] = useState({
        date: '',
        name: '',
        price: ''
    });

    const nameChange = (e) => {
        setUserInput((prev) => {
            return {
                ...prev,
                name: e.target.value
            }
        })
    };
    
    const priceChange = (e) => {
        setUserInput((prev) => {
            return {
                ...prev,
                price: e.target.value
            }
        })
    };

    const dateChange = (e) => {
        setUserInput((prev) => {
            return {
                ...prev,
                date: e.target.value
            }
        })
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const costData = {
            date: userInput.date,
            name: userInput.name,
            price: userInput.price
        };
        props.onSaveCostData(costData);
        setUserInput({
            date: '',
            name: '',
            price: ''
        });
    };

    
    return (
        <form onSubmit={submitHandler}>
            <div className={styles.newCost__controls}>
                <div className={styles.newCost__control}>
                    <label>Название</label>
                    <input 
                    type="text" 
                    onChange={nameChange} 
                    value={userInput.name}/>
                </div>
                <div className={styles.newCost__control}>
                    <label>Сумма</label>
                    <input 
                    type="number" 
                    min='0.01' 
                    step='0.01' 
                    onChange={priceChange} 
                    value={userInput.price}/>
                </div>
                <div className={styles.newCost__control}>
                    <label>Дата</label>
                    <input 
                    type="date" 
                    min='2020-01-01' 
                    onChange={dateChange} 
                    value={userInput.date}/>
                </div>
                <div className={styles.newCost__actions}>
                    <button type='submit'>Добавить Расход</button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;