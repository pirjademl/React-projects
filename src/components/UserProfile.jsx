import { useEffect } from "react";
import { useState } from "react";
import { FolderPen, Mails, Phone, Globe } from 'lucide-react';
import { User } from "./User";
import SkeletonLoader from "./SkeletonLoader";
import image from '../assets/image.png';
export default function UserProfile(props) {
    const [user, setUser] = useState({});

    const [isloading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`);
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || 'Could not fetch users');
            }
            setUser(data);
            setLoading(false);
        }
        fetchData();
    }, [props.id, setUser]);
    console.log(user)

    const firstName = user.name?.split(' ')[0]; // <-- Optional chaining
    const imageUrl = `https://github.com/${firstName}.png` || image;
    return (

        <div className=" absolute inset-11 ">
            {isloading ? (<SkeletonLoader />) : (
                <div className="user-card text-white font-light bg-secondary shadow-2xl overflow-hidden transition-colors ease-in cursor-pointer   ">
                    <div className="user-info flex flex-wrap gap-4 p-6 relative  rounded-md border border-gray-600  items-center flex-grow-0">
                        <div className="user-image ">
                            <img className="rounded-full aspect-square border h-16  " src={imageUrl} alt="" />
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            <div className="flex gap-2">
                                <FolderPen size={24} />
                                <h1>{user.name}</h1>
                            </div>
                            <div className="flex gap-2">
                                <Mails size={24} />
                                <p>{user.email}</p>
                            </div>
                            <div className="flex gap-2">
                                <Phone size={24} />
                                <p>{user.phone}</p>
                            </div>
                            <div className="flex gap-2">
                                <Globe size={24} />
                                <a href={user.website} className='underline'>{user.website}</a>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
