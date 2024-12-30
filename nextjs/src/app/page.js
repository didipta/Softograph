import Homepage from "@/components/Homepage";
import homedata from "@/data/data.json";
export default async function Home() {
  // const data = await fetch("http://localhost:3000/data.json");
  // const homedata = await data.json(); //build time not fetching data from server error in console.

  return (
    <div>
      <Homepage homedata={homedata} />
    </div>
  );
}
