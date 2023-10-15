import MyButton from './Button';
import CardDescription from './CardDescription';
import { nanoid } from 'nanoid';

const CarCard = ({ el }) => {
  const addressArray = el.address.split(' ');

  const [, , , city, country] = addressArray;
  const comaIndex = city.indexOf(',');
  const editedCity = city.slice(0, comaIndex);

  const newArray = [
    editedCity,
    country,
    el.rentalCompany,
    el.type,
    el.model,
    el.mileage,
    // el.functionalities[Math.ceil(Math.random())].slice(0, 20),
  ];
  return (
    <li className="w-[274px] mb-[50px]">
      <div className="overflow-hidden rounded-[14px]  mb-[14px] w-[274px] h-[268px]">
        <img
          src={el.img}
          alt={`${el.make} ${el.model}`}
          className="w-[100%] h-[100%] object-cover object-center"
        />
      </div>
      <div className="flex justify-between mb-2">
        <p>
          {el.make} <span className="text-buttonMainColor">{el.model}</span>, {el.year}
        </p>
        {el.rentalPrice}
      </div>

      <ul className="flex flex-wrap mb-7">
        {newArray.map(fieldDescription => {
          return (
            <CardDescription key={nanoid()} fieldDescription={fieldDescription}></CardDescription>
          );
        })}
      </ul>
      <MyButton typeBtn={'button'} textBtn={'Learn more'} widthBtn={'274px'} />
    </li>
  );
};

export default CarCard;
