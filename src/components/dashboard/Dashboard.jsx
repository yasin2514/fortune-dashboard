import DashboardCard from "./fortuneDashboard/DashboardCard";
import FortuneSidebar from "./fortuneDashboard/fortuneSidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[230px_3fr] h-[100vh]">
      <div className="  w-full flex flex-col shadow-lg px-4 pt-3 items-center">
        <div className="text-dark font-semibold  text-3xl mb-5">Uddokta</div>
        <FortuneSidebar></FortuneSidebar>
      </div>
      <div className=" h-[100vh] w-full p-3 shadow-inner">
        <div className="bg-[#ffffff]   text-xl font-semibold text-center border-b border-gray-400">
          Fortunate Trade Land
        </div>
        <div className="p-3">
          <h4 className="text-2xl font-semibold">Dashboard</h4>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <DashboardCard
            title1={"Total Sales"}
            title2={"৳ 0.00"}
            color={"bg-[#1abc9c]"}
          ></DashboardCard>
          <DashboardCard
            title1={"Total Sales"}
            title2={"৳ 0.00"}
            color={"bg-[#05bd51]"}
          ></DashboardCard>
          <DashboardCard
            title1={"Total Sales"}
            title2={"৳ 0.00"}
            color={"bg-[#3498db]"}
          ></DashboardCard>
          <DashboardCard
            title1={"Total Sales"}
            title2={"৳ 0.00"}
            color={"bg-[#9b59b6]"}
          ></DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
