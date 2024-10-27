async function getPredictedAge(name: string) {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
}

type Params = {
  params: { name: string };
};

export default async function Name({ params }: Params) {
  const ageData = await getPredictedAge(params?.name);

  return (
    <div>
      <div>
        <div>Personal Info</div>
        <div>Age: {ageData?.age}</div>
      </div>
    </div>
  );
}
