export default function WorkDetail(props) {
  const { desc, title } = props;

  return (
    <div>
      <div className="text-left p-8">
        <h2 className="font-bold text-slate-700 dark:text-slate-300 text-xl">{title}</h2>
        {/* <p className="text-gray-600 mt-6 ">{desc}</p> */}
        <ul className="list-disc m-4">
          {desc.map((item) => (
            <li className="text-slate-600 dark:text-slate-500 mt-6">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
