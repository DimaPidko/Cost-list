/* eslint-disable react/prop-types */
import CostForm from "./cost-form/CostForm";

import styles from './NewCost.module.sass';

const NewCost = (props) => {

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
        };

        props.onAddCost(costData);
    };

    return (
        <div className={styles.newCost}>
            <CostForm onSaveCostData={saveCostDataHandler}/>
        </div>
    );
};

export default NewCost;