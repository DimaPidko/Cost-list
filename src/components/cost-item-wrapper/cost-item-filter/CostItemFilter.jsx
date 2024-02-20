/* eslint-disable react/prop-types */
import styles from './CostItemFilter.module.sass';

const CostItemFilter = (props) => {
    
    const onSelectHandler = (e) => {
        props.onSaveCostFilter(e.target.value);
    };
    
    return (
        <div className={styles.costFilter}>
            <h2>Выбор По Году</h2>
            <select onChange={onSelectHandler} value={props.selectedYear}>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </div>
    );
};

export default CostItemFilter;