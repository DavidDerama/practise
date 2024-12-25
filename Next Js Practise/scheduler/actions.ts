"use server";

export default async function handleSubmit(formdata: FormData) {
  console.log(formdata.get("name"));
}
