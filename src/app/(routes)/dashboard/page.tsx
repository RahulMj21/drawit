"use client";

import useCheckUser from "@/hooks/useCheckUser";

const Dashboard = () => {
  useCheckUser();

  return (
    <div className="p-4 flex gap-4">
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default Dashboard;
