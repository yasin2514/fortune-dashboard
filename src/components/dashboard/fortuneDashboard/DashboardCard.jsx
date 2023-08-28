const DashboardCard = ({ title1, title2, color }) => {
  return (
    <div className={`${color} p-5 rounded-lg text-white text-center`}>
      <h6 className="text-2xl font-bold">{title1}</h6>
      <h5 className="text-xl">{title2}</h5>
    </div>
  );
};

export default DashboardCard;
