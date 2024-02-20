/* eslint-disable react/prop-types */
import styles from './CostDate.module.sass'

const CostDate = (props) => {
    const month = props.date.toLocaleString('ru-RU', {month: 'long'});
    const year = new Date(props.date).getFullYear();
    const day = props.date.toLocaleString('ru-RU', {day: '2-digit'});

    return (
        <div className={styles.costDate}>
            <div className={styles.costDate__month}>{month}</div>
            <div className={styles.costDate__year}>{year}</div>
            <div className={styles.costDate__day}>{day}</div>
        </div>
    );
};

export default CostDate