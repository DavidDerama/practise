import Accounts from "@/app/components/Accounts";
import Spendings from "@/app/components/Spendings";

const ProfilePage = () => {
  return (
    <div className="flex w-full gap-6">
      <Accounts className="flex-col" />
      <Spendings></Spendings>
    </div>
  );
};

export default ProfilePage;
