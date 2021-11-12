import { useContext } from "react";
import { FirebaseContext } from "../../layout/Imports";

const Dashboard = () => {
  const authContext = useContext(FirebaseContext);
  const { usuario } = authContext;

  return (
    <div>
  
    </div>
  );
};

export default Dashboard;
