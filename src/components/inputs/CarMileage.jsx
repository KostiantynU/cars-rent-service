import { useState } from 'react';

const CarMileage = () => {
  const [carMileageFrom, setCarMileageFrom] = useState('');
  const [carMileageTo, setCarMileageTo] = useState('');

  return (
    <div>
      <label className="text-labelColor font-medium text-sm leading-[1.29] mb-2">Car mileage</label>
      <div className="relative">
        <input
          type="number"
          className="w-[160px] px-[18px] py-3.5 outline-none rounded-[14px] rounded-r-none border-r-[1px] border-labelColor/20 bg-inputColor text-lg text-mainTextColor font-medium leading-[1.11] placeholder:text-mainTextColor placeholder:leading-[1.11] [&::-webkit-inner-spin-button]:invisible"
          placeholder="From"
          value={carMileageFrom}
          onChange={evt => setCarMileageFrom(evt.target.value)}
        />
        <input
          type="number"
          className="w-[160px] px-[18px] py-3.5 outline-none rounded-[14px] rounded-l-none bg-inputColor text-lg text-mainTextColor font-medium leading-[1.11] placeholder:text-mainTextColor placeholder:leading-[1.11] [&::-webkit-inner-spin-button]:invisible"
          placeholder="To"
          value={carMileageTo}
          onChange={evt => setCarMileageTo(evt.target.value)}
        />
      </div>
    </div>
  );
};

export default CarMileage;
