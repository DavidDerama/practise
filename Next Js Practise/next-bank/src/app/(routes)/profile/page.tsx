import Accounts from "@/app/components/Accounts";
import Spendings from "@/app/components/Spendings";

const ProfilePage = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full gap-6">
      <Accounts className="flex-col" fullWidth={false} />
      <Spendings></Spendings>
    </div>
  );
};

export default ProfilePage;
