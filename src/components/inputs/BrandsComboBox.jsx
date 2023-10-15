import { Combobox } from '@headlessui/react';
import { useState } from 'react';

const BrandsComboBox = ({ brandsArray }) => {
  const [selectedCar, setSelectedCar] = useState('');
  const [query, setQuery] = useState('');

  const filteredBrandsArray =
    query === ''
      ? brandsArray
      : brandsArray.filter(el => el.toLowerCase().includes(query.toLowerCase()));

  const clearValue = () => setQuery('');

  return (
    <Combobox value={selectedCar} onChange={setSelectedCar} nullable>
      <Combobox.Label className="text-labelColor font-medium text-sm leading-[1.29] mb-2">
        Car brand
      </Combobox.Label>
      <div className="relative">
        <Combobox.Input
          className="w-56 px-[18px] py-3.5 relative outline-none rounded-[14px] bg-inputColor text-lg text-mainTextColor font-medium leading-[1.11] placeholder:text-mainTextColor placeholder:leading-[1.11]"
          onChange={evt => setQuery(evt.target.value)}
          onBlur={() => clearValue('')}
          placeholder="Enter the text"
          value={query === '' ? selectedCar : query}
        />
        <Combobox.Options className="absolute top-[100%] left-0 w-[100%] h-[272px] overflow-y-scroll scroll-smooth border-[1px] border-mainTextColor/5 rounded-[14px] bg-buttonText">
          {filteredBrandsArray.map(el => (
            <Combobox.Option
              key={el}
              value={el}
              className="ui-active:text-mainTextColor ui-not-active:text-mainTextColor/20"
            >
              {el}
            </Combobox.Option>
          ))}
        </Combobox.Options>
        <Combobox.Button
          className={({ open }) =>
            `${
              open
                ? 'absolute top-[50%] -translate-y-2/4 right-[18px] w-2 h-2 border-2 border-t-0 border-l-0 border-mainTextColor rotate-[225deg]'
                : 'absolute top-[50%] -translate-y-2/4 right-[18px] w-2 h-2 border-2 border-t-0 border-l-0 border-mainTextColor rotate-45'
            }`
          }
        />
      </div>
    </Combobox>
  );
};

export default BrandsComboBox;
