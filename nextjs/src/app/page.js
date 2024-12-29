import Homepage from "@/components/Homepage";

export default async function Home() {
 
  const data = await fetch("http://localhost:3000/data.json");
  const homedata = await data.json();
 

  return (
    <div>
      <Homepage homedata={homedata} />
    </div>
  );
}
