// "use client";
export default function Project(props) {
  const { pic, title, onClick } = props;

  return (
    <div onClick={onClick} className="text-left bg-white w-60 mt-6 mx-4 drop-shadow-xl border border-gray-100 rounded transition duration-150 ease-out hover:ease-in hover:scale-105 hover:cursor-pointer">
      <div className="w-60 h-32 bg-gray-300 flex justify-items-center rounded">
        <img src={pic} width="240" className="object-cover rounded-t" />
      </div>
      <div className="m-4 text-md text-gray-600 font-bold">{title}</div>
    </div>
  );
}
