const CardDescription = ({ el }) => {
  return (
    <li className="text-mainTextColor/50 text-xs font-medium leading-[1.5] border-r border-mainTextColor/10  ml-[3px] pr-[4px] [&:last-child]:border-0">
      {el}
    </li>
  );
};
export default CardDescription;
