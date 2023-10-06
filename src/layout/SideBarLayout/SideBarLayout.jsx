import React from 'react';
import { Outlet } from 'react-router-dom';
import './SideBarLayout.css';

const SideBarLayout = () => {
  return (
    <div className="container">
      <header>
        <form className="search-form">
          <label className="search-form__label">
            Car brand
            <input type="text" placeholder="Enter the text" list="car-brand" />
            <datalist id="car-brand">
              <option></option>
            </datalist>
          </label>
          <label className="search-form__label">
            Price/1 hour
            <input type="text" placeholder="To $" />
          </label>
          <label className="search-form__label">Car milleage/km</label>
        </form>
      </header>
      <Outlet />
    </div>
  );
};

export default SideBarLayout;
