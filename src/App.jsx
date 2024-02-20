import CostItemWrapper from "./components/cost-item-wrapper/CostItemWrapper";
import NewCost from "./components/new-cost/NewCost";
import { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {
    const [costs, setCosts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3306');
          const formattedData = response.data.map(item => ({
            ...item,
            date: new Date(item.date),
          }));
          setCosts(formattedData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);


    const addCostHandler = async (cost) => {
      try {
        const response = await axios.post('http://localhost:3306/Costs', {
          name: cost.name,
          date: cost.date,
          price: cost.price
        });
        console.log('Ответ от сервера:', response.data);
      } catch (error) {
        console.error('Ошибка при отправке POST-запроса:', error);
      }
    };

    return (
      <>
        <NewCost 
        onAddCost={addCostHandler}/>
        <CostItemWrapper
        costs={costs}/>
      </>
    );
};

export default App;