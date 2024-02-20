/* eslint-disable react/prop-types */
import { useState } from 'react';
import CostItem from '../cost-item/CostItem.jsx';
import CostItemFilter from './cost-item-filter/CostItemFilter.jsx';

import styles from './CostItemWrapper.module.sass';

const CostItemWrapper = (props) => {

    const [selectedYear, setSelectedYear] = useState('2024');

    const saveCostFilterHandler = (inputCostFilter) => {
        setSelectedYear(inputCostFilter);
    };

    const filteredCosts = props.costs.filter(cost => {
        return new Date(cost.date).getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <CostItemFilter 
            onSaveCostFilter={saveCostFilterHandler} 
            selectedYear={selectedYear}/>
            <div className={styles.costs}>
            {filteredCosts.length === 0 ? (
            <h2>В Этом Году Расходов Нет</h2>
            ) : (
            filteredCosts.map(cost => (
            <CostItem 
            key={cost.id}
            date={cost.date} 
            name={cost.name} 
            price={cost.price}/>)))}
        </div>
        </div>
    );
};

export default CostItemWrapper;