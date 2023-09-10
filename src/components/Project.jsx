// "use client";
export default function Project(props) {
  const { pic, title, onClick } = props;

  return (
    <div
      onClick={onClick}
      className="text-left bg-white dark:bg-slate-800 w-60 mt-6 mx-4 drop-shadow-xl border border-slate-100 dark:border-slate-900 rounded-xl transition duration-150 ease-out hover:ease-in hover:scale-105 hover:cursor-pointer"
    >
      <div className="w-60 h-32 bg-gray-300 dark:bg-slate-700 flex justify-items-center rounded-xl">
        <img src={pic} width="240" className="object-cover rounded-t-xl" />
      </div>
      <div className="m-4 text-md text-slate-600 dark:text-slate-400 font-bold">{title}</div>
    </div>
  );
}
