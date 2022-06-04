import { Header } from "../../components/Header";
import { ListTasks } from "../../components/ListTasks";

export const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <ListTasks />
    </div>
  );
};
