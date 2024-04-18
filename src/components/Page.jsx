import Icon from "./Icon";

function Page({ title, icon, flex, children }) {
  return (
    <div className={"space-y-4 " + (flex ? "flex flex-col min-h-full" : "")}>
      <div className="space-x-3">
        <Icon name={icon} />
        <span className="text-2xl align-middle">{title}</span>
      </div>
      <hr className="border-gray-100" />
      {children}
    </div>
  );
}

export default Page;
