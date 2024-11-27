"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formSchema = z.object({
  transfer: z.coerce.number().gte(1).lte(9999),
  account: z.string(),
});

export default function TransferDialog() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transfer: 1,
      account: "savings",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Transfer success", {
      closeButton: false,
    });
  }
  return (
    <>
      <ToastContainer
        autoClose={1000}
        position="top-center"
        hideProgressBar={true}
        limit={3}
        closeButton={false}
        style={{
          width: "fit-content",
          fontSize: "14px",
        }}
      />

      <AlertDialog>
        <AlertDialogTrigger className="grow">
          <div className="text-lg py-2 w-full border-2 border-[#FFA724] rounded-full font-bold">
            Transfer
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Transfer for something</AlertDialogTitle>
          </AlertDialogHeader>
          <Form {...form}>
            <form
              noValidate
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="transfer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transfer Amount ($):</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Write the amount"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="account"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account:</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value} // Ensure correct value handling
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Account" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="savings">Savings</SelectItem>
                        <SelectItem value="luca_boglaru">Luca</SelectItem>
                        <SelectItem value="mohammed_saif">Ander</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AlertDialogFooter>
                <AlertDialogCancel className="rounded-full">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  type="submit"
                  className="bg-[#FFD18C] text-black font-bold rounded-full px-8 hover:bg-[#FFD18C] hover:"
                >
                  Transfer
                </AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </Form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
