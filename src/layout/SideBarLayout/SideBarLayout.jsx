import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HandySvg } from '@handy-ones/handy-svg';
import chevronDown from '../../img/chevron-down.svg';
import './SideBarLayout.css';
import InputList from '../../components/InputList';
import brandsArray from '../../services/makes';

const SideBarLayout = () => {
  const [stateOfSvg, setStateOfSvg] = useState(false);
  console.log(stateOfSvg);
  return (
    <div className="px-32 py-[150px]">
      <header>
        <form>
          <div className="inline-block relative">
            <label htmlFor="carBrand" className="block mb-2">
              Car brand
            </label>
            <InputList
              classInp={
                'appearance-none w-56 px-[18px] py-3.5 relative rounded-[14px] bg-[#F7F7FB] focus:outline-none [&::-webkit-calendar-picker-indicator]:invisible'
              }
              listInp={'carBrands'}
              typeInp={'text'}
              nameInp={'carBrand'}
              idInp={'carBrand'}
              placeholderInp={'Enter the text'}
              setStateOfSvg={setStateOfSvg}
              stateOfSvg={stateOfSvg}
            />
            <HandySvg
              src={chevronDown}
              width="20"
              height="20"
              {...(stateOfSvg
                ? `className='fill-none absolute top-[57%] right-[8%]'`
                : `className='fill-none absolute top-[57%] right-[8%] rotate-180'`)}
            />
            <datalist id="carBrands">
              {brandsArray.map(el => (
                <option key={el}>{el}</option>
              ))}
            </datalist>
          </div>
          <label>
            Price/1 hour
            <input type="text" placeholder="To $" />
          </label>
          <label>Car milleage/km</label>
        </form>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SideBarLayout;
