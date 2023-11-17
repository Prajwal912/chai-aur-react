import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Github = () => {
    const data = useLoaderData()
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Prajwal912")
//       // fetch("https://api.linkedin.com/v2/people/(vanityName:prajwalshah2001)?projection=(id,firstName,lastName)")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setdata(data);
//       });
//   }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Public Repo: {data.public_repos}
      </div>
      <img
        className="mx-auto"
        src={data.avatar_url}
        height={300}
        width={300}
        alt="Git Picture"
      />
    </>
  );
};

export default Github;


export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/Prajwal912")
    return res.json()
}