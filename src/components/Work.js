export default function Work(props) {
  const { logo, name, onItemClick } = props;
  const handleClick = () => {
    onItemClick();
  };

  return (
    <div
      onClick={handleClick}
      className="transition duration-250 w-100 hover:bg-white text-gray-600 p-8 text-left hover:cursor-pointer"
    >
      <p className="font-bold text-sm flex items-center gap-2">
        <span>
          <img src={logo} width={20}></img>
        </span>
        {name}
      </p>
    </div>
  );
}
