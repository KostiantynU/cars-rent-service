import React from 'react';
import { Outlet } from 'react-router-dom';
import BrandsComboBox from '../../components/BrandsComboBox';
// import { HandySvg } from '@handy-ones/handy-svg';
// import chevronDown from '../../img/chevron-down.svg';
import './SideBarLayout.css';
import brandsArray from '../../services/makes';

const SideBarLayout = () => {
  return (
    <div className="px-32 py-[150px]">
      <header>
        <form>
          <div className="inline-flex flex-col">
            <BrandsComboBox brandsArray={brandsArray} />
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
