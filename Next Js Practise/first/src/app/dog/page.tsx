import Image from "next/image";

async function getDogImages() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-cache",
  });
  return res.json();
}

export default async function Dog() {
  const dogImage = await getDogImages();
  return (
    <div>
      <h1>Get dog image everytime you reload or ge into page</h1>
      <Image src={dogImage?.message} width={300} height={300} alt="dog" />
    </div>
  );
}
