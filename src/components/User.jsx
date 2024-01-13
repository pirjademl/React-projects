import { Mails, FolderPen, Globe, Phone } from 'lucide-react';
import PropTypes from 'prop-types';
import 'react-loading-skeleton/dist/skeleton.css'
import UserProfile from './UserProfile';
import image from '../assets/image.png';
import { useState } from 'react';
function User(props) {
    // State to manage the Information of the user 
    const [isUserVisible, setUserVisible] = useState(false);


    User.propTypes = {
        user: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            website: PropTypes.string.isRequired
        }).isRequired
    };

    const { id, name, email, phone, website } = props.user;
    const nameArray = name.split(' ')[0];

    const url = `https://github.com/${nameArray}.png`;

    return (
        <div className="">
            <div className="user-card text-white font-light bg-secondary shadow-2xl overflow-hidden transition-colors ease-in cursor-pointer   ">
                <div className="user-info flex flex-wrap gap-4 p-6 relative  rounded-md border border-gray-600  items-center flex-grow-0">
                    <div className="user-image ">
                        <img className="rounded-full aspect-square border h-16  " src={url || image} alt="" />
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <div className="flex gap-2">
                            <FolderPen size={24} />
                            <h1>{name || <Skeleton />}</h1>
                        </div>
                        <div className="flex gap-2">
                            <Mails size={24} />
                            <p>{email || <Skeleton />}</p>
                        </div>
                        <div className="flex gap-2">
                            <Phone size={24} />
                            <p>{phone || <Skeleton />}</p>
                        </div>
                        <div className="flex gap-2">
                            <Globe size={24} />
                            <a href={website} className='underline'>{website || <Skeleton />}</a>
                        </div>

                    </div>
                    <div className=" w-full flex gap-4">

                        <button onClick={() => { setUserVisible(!isUserVisible) }} className='rounded-lg top-0 bg-gray-800 ease-in-out  hover:bg-slate-600 p-3x w-full'>View Profile</button>


                        <button className='rounded-lg top-0 bg-white text-black hover:bg-slate-300 p-3 w-full'>Hire </button>
                    </div>
                    {
                        isUserVisible && <UserProfile id={id} />
                    }
                </div>
            </div>
        </div>




    )
}
export { User };