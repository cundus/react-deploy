import React from "react";

const Home = () => {
   const [threads, setThreads] = React.useState<
      {
         id: number;
         content: string;
      }[]
   >([]);

   const getThreads = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/threads`);

      const data = await response.json();

      setThreads(data.threads);
   };

   React.useEffect(() => {
      getThreads();
   }, []);

   return (
      <div>
         <h1>Home</h1>
         <button onClick={getThreads}>Get Threads</button>
         {threads.map((thread) => (
            <div key={thread.id}>{thread.content}</div>
         ))}
      </div>
   );
};

export default Home;
