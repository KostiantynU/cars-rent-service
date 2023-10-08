import { useState } from 'react';

const InputList = ({
  typeInp,
  placeholderInp,
  idInp,
  nameInp,
  listInp,
  classInp,
  stateOfSvg,
  setStateOfSvg,
}) => {
  const [inpValue, setInpValue] = useState('');
  return (
    <input
      className={classInp}
      type={typeInp}
      placeholder={placeholderInp}
      list={listInp}
      id={idInp}
      value={inpValue}
      onChange={evt => setInpValue(evt.target.value)}
    />
  );
};

export default InputList;
