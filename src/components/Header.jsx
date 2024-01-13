import { Circle } from 'lucide-react';
const Header = () => {
    return (
        <header>
            <nav>
                <div className="flex items-center justify-center gap-4  flex-wrap bg-primary  pt-4">
                    <div className="flex gap-2 items-center flex-shrink-0 text-white mr-6">
                    
                    </div>
                    <div className='project-description'>
                        <p className='text-white  font-serif text-xl'>This project is a part of a Learning hooks in react</p>
                    </div>
                </div>
            </nav>
        </header>
    )

}
export default Header;