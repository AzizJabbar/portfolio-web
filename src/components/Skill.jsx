import { Icon } from "@iconify/react";

export default function Skill(props) {
  const { name, icon, color } = props;

  return (
    <div className="text-center mx-8 my-8">
      <Icon icon={icon} color={color} width="80" height="80" className="inline" />
      <div className="mt-6 text-sm text-slate-600 dark:text-slate-400">{name}</div>
    </div>
  );
}
