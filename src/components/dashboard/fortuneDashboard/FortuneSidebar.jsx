import { NavLink } from "react-router-dom";

const FortuneSidebar = () => {
  const sidebar = [
    {
      path: "/dashboard",
      title: "Dashboard",
    },
    {
      path: "/create",
      title: "Create",
    },
    {
      path: "/alter",
      title: "Alter",
    },
    {
      path: "/chart-of-accounts",
      title: "Chart of Accounts",
    },
    {
      path: "/banking",
      title: "Banking",
    },
    {
      path: "/day-book",
      title: "Day book",
    },
    {
      path: "/process-inventory",
      title: "Process (Inventory)",
    },
    {
      path: "/voucher-accounts",
      title: "Voucher (Accounts)",
    },
    {
      path: "/reports",
      title: "Reports",
    },
    {
      path: "/profit-loss-accounts",
      title: "Profit & Loss Accounts",
    },
    {
      path: "/balance-sheet",
      title: "Balance Sheet",
    },
    {
      path: "/configure",
      title: "Configure",
    },
    {
      path: "/day-ending",
      title: "Day Ending",
    },
    {
      path: "/database",
      title: "Database",
    },
  ];
  return (
    <div className="w-full h-[100vh] font-semibold ">
      {sidebar.map((item, index) => {
        return (
          <div key={index} className="mt-1 text-[17px]">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? " font-semibold text-green-600 " : "text-dark"
              }
            >
              {item.title}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default FortuneSidebar;
