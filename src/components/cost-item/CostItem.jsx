/* eslint-disable react/prop-types */
import CostDate from '../cost-date/CostDate';

import styles from './CostItem.module.sass';

const CostItem = (props) => {
    return (
        <div className={styles.costItem}>
            <CostDate date={props.date}/>
            <div className={styles.costItem__description}>
                <h2>{props.name}</h2>
                <div className={styles.costItem__price}>{`${props.price} грн.`}</div>
            </div>
        </div>
    );
};

export default CostItem;