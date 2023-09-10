export default function Work(props) {
  const { logo, name, onItemClick } = props;
  const handleClick = () => {
    onItemClick();
  };

  return (
    <div
      onClick={handleClick}
      className="transition duration-250 w-100 hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 p-8 text-left hover:cursor-pointer rounded-l-lg"
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
