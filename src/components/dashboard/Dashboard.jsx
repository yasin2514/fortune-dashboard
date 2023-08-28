import Header from "../Header";
import DashboardCard from "./fortuneDashboard/DashboardCard";
import FortuneSidebar from "./fortuneDashboard/fortuneSidebar";

const Dashboard = () => {
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-[230px_3fr] h-[100vh] shadow-inner  w-full">
        <div className="w-full flex items-center justify-center shadow-2xl mt-10">
          <FortuneSidebar></FortuneSidebar>
        </div>
        <div className=" h-[100vh] w-full p-3 shadow-inner">
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
    </>
  );
};

export default Dashboard;
