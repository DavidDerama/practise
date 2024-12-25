import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default async function EmployeesDialog() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: skills } = await supabase.from("skills").select();

  const { data: positions } = await supabase.from("positions").select();

  const skillsEl = skills?.map(({ name, id }) => {
    return <option value={id}>{name}</option>;
  });

  const positionsEl = positions?.map(({ name, id }) => {
    return <option value={id}>{name}</option>;
  });

  return (
    <Dialog>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Employees</h1>
        <DialogTrigger className="bg-black rounded-lg text-white px-4">
          Add an employee
        </DialogTrigger>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">Add an employee</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <label className="font-bold" htmlFor="full-name">
              Full Name
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-sm py-1 px-2"
              name="full-name"
              required
              placeholder="Enter full name"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-bold" htmlFor="contact">
              Contact
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-sm py-1 px-2"
              name="contact"
              required
              placeholder="040 123 4567"
              pattern="\d{3} \d{3} \d{4}"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-bold" htmlFor="skill">
              Skills
            </label>
            <select
              name="skill"
              className="border border-gray-300 rounded-sm py-2 px-2"
              required
            >
              <option value="" selected disabled>
                --Select a skill--
              </option>
              {skillsEl}
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-bold" htmlFor="position">
              Positions
            </label>
            <select
              name="position"
              className="border border-gray-300 rounded-sm py-2 px-2"
              required
            >
              <option value="" selected disabled>
                --Select a position--
              </option>
              {positionsEl}
            </select>
          </div>
          <button className="py-3 bg-black rounded-full text-white mt-4">
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
