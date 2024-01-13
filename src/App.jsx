import { useState, useEffect } from "react";
import { User } from "./components/User";
import Header from "./components/Header";
import SkeletonLoader from "./components/SkeletonLoader";

const App = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/');

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Could not fetch users');
      }

      setUsers(data);
      setIsLoading(false);
    }
    setTimeout(() => {  // <-- Simulate network delay
      fetchData();
    }, 5000);
  }
    , [])

  return (
    <>
      <Header />
      <div className="bg-primary p-12 font-serif h-max text-white users-container grid grid-cols-1 md:grid-cols-3 gap-4">
        {isLoading ? (
          // Display the skeleton loader while data is being fetched
          <SkeletonLoader />
        ) : (
          // Render the user list when data is available
          users.map((user) => <User key={user.id} user={user} />)
        )}
      </div>
    </>
  );
}

export default App;
