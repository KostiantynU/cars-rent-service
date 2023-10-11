const MyButton = ({ textBtn, widthBtn, typeBtn }) => {
  return (
    <button
      type={typeBtn}
      className={`w-[${widthBtn}] h-[48px] px-11 rounded-[12px] bg-buttonMainColor text-buttonTextColor hover:bg-buttonHoverColor`}
    >
      {textBtn}
    </button>
  );
};

export default MyButton;
