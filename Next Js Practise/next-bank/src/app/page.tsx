import Accounts from "./components/Accounts";
import PayDialog from "./components/PayDialog";
import TransferDialog from "./components/TransferDialog";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex gap-1 w-[400px] pb-6 mx-auto">
        <PayDialog />
        <TransferDialog />
      </div>

      <Accounts fullWidth={true} />
    </div>
  );
}
