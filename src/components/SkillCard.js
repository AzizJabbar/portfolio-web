import { Icon } from "@iconify/react";

export default function Skill(props) {
  const { name, icon, color } = props;

  return (
    <div className="shadow-md p-2 rounded-md w-fit flex justify-center items-center dark:border-0 dark:bg-slate-900 border gap-1.5">
      <Icon icon={icon} color={color} width="20" height="20" className="" />
      <div className="text-xs text-slate-600 dark:text-slate-400 ">{name}</div>
    </div>
  );
}
