import React from 'react';
import { Outlet } from 'react-router-dom';
import BrandsComboBox from '../../components/inputs/BrandsComboBox';
import PriceComboBox from '../../components/inputs/PriceComboBox';
import brandsArray from '../../utils/makes';
import CarMileage from '../../components/inputs/CarMileage';
import MyButton from '../../components/Button';
import Catalog from '../../pages/Catalog/Catalog';

const SideBarLayout = () => {
  return (
    <div className="px-32 py-[150px]">
      <header className="mx-[auto] mb-[50px]">
        <form className="flex gap-[9px] justify-center">
          <div className="inline-flex flex-col">
            <BrandsComboBox brandsArray={brandsArray} />
          </div>
          <div className="inline-flex flex-col">
            <PriceComboBox />
          </div>
          <div className="inline-flex flex-col">
            <CarMileage />
          </div>
          <div className="flex items-end">
            <MyButton typeBtn="button" textBtn="Search" widthBtn="136px" />
          </div>
        </form>
      </header>
      <Outlet />
      <main>
        <Catalog />
      </main>
    </div>
  );
};

export default SideBarLayout;
