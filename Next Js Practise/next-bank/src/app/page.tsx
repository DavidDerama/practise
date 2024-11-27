import Accounts from "./components/Accounts";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex gap-4 w-[400px] pb-6 mx-auto">
        <button className="text-lg py-2 grow border-2 border-[#FFA724] rounded-full font-bold">
          Pay
        </button>
        <button className="text-lg py-2 grow border-2 border-[#FFA724] rounded-full font-bold">
          Transfer
        </button>
      </div>

      <Accounts fullWidth={true} />
    </div>
  );
}
