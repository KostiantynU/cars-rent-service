import { useEffect, useState } from 'react';
import CarCard from '../../components/CarCard';
import getData from '../../services/fetchAPI';

const Catalog = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    getData.getInfo().then(result => {
      setInfo([...result]);
    });
  }, []);

  return (
    <div className="grid grid-cols-4">
      {info.map(el => (
        <CarCard key={el.id} el={el} />
      ))}
    </div>
  );
};

export default Catalog;
