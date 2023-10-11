import { Combobox } from '@headlessui/react';
import { useState } from 'react';

const PriceComboBox = () => {
  const [pricePerHour, setPricePerHour] = useState('');
  const [query, setQuery] = useState('');

  const priceArray = [];
  for (let i = 10; i <= 200; i += 10) {
    priceArray.push(i);
  }
  const filteredPriceArray =
    query === ''
      ? priceArray
      : priceArray.filter(
          //   el => el === Number(query)
          el => String(el).includes(query.toLowerCase())
          //   return el.toLowerCase().includes(query).toLowerCase();
        );

  return (
    <Combobox onChange={setPricePerHour} nullable>
      <Combobox.Label className="text-labelColor font-medium text-sm leading-[1.29] mb-2">
        Price/ 1 hour
      </Combobox.Label>
      <div className="relative">
        <Combobox.Input
          className="w-[125px] px-[18px] py-3.5 outline-none rounded-[14px] bg-inputColor text-lg text-mainTextColor font-medium leading-[1.11] placeholder:text-mainTextColor placeholder:leading-[1.11] [&::-webkit-inner-spin-button]:invisible"
          onChange={evt => setQuery(evt.target.value)}
          placeholder="To $"
          value={pricePerHour}
        />
        <Combobox.Options className="absolute top-[100%] left-0 w-[100%] h-[188px] overflow-y-scroll scroll-smooth border-[1px] border-mainTextColor/5 rounded-[14px] bg-buttonText">
          {filteredPriceArray.map(el => (
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

export default PriceComboBox;
