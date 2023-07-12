export default function WorkDetail(props) {
  const { desc, title } = props;

  return (
    <div>
      <div className="text-left p-8">
        <h2 className="font-bold text-gray-700 text-xl">{title}</h2>
        {/* <p className="text-gray-600 mt-6 ">{desc}</p> */}
        <ul className="list-disc m-4">
          {desc.map((item) => (
            <li className="text-gray-600 mt-6">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
