import Articls from "./components/Articls";
import Image from "next/image";

export default function Home() {

 
  return (

    <div className="">

      <div className="  p-5 m-auto flex justify-center place-items-center gap-3">
        <Image src='/logo.svg' width={100} alt="logo" height={100}></Image>
        <h4 style={{
          backgroundImage: "url('https://myshoproject.vercel.app/logo.svg')",
          backgroundSize: "cover", // Ensures the image covers the text
          backgroundPosition: "80% 25%",
          backgroundSize: "200%",// Custom position
        }} className=" bg-cover text-black/5 bg-clip-text bg-center font-Abrial text-6xl">My Blog</h4>

      </div>

     <Articls></Articls>



      {/* 
      
      query MyQuery {
  article(where: {}) {
    createdAt
    id
    image {
      url
    }
    isLive
    slugofart
    title
    description
  }
}*/}



    </div>
  );
}
