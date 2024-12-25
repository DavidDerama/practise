import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import EmployeesDialog from "@/app/components/EmployeesDialog";

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: employees } = await supabase
    .from("employees")
    .select(`full_name, position (name), skill (name), contact `);

  const employeesEl = employees?.map(
    ({ full_name, skill, position, contact }) => {
      return (
        <TableRow>
          <TableCell className="font-medium">{full_name}</TableCell>
          <TableCell>{skill.name}</TableCell>
          <TableCell>{position.name}</TableCell>
          <TableCell>{contact}</TableCell>
          <TableCell className="text-right">Remove</TableCell>
        </TableRow>
      );
    }
  );

  return (
    <>
      <EmployeesDialog />
      <Table className="p-0 mt-5">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Name</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Contact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{employeesEl}</TableBody>
      </Table>
    </>
  );
}
