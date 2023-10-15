import { useEffect, useState } from 'react';
import CarCard from '../../components/CarCard';
import getData from '../../services/fetchAPI';

const Catalog = () => {
  const [carsArray, setcarsArray] = useState([]);
  useEffect(() => {
    getData.getCarsArray({ page: 1, limit: 24 }).then(result => {
      setcarsArray([...result]);
    });
  }, []);

  return (
    <ul className="grid grid-cols-4">
      {carsArray.map(el => (
        <CarCard key={el.id} el={el} />
      ))}
    </ul>
  );
};

export default Catalog;
