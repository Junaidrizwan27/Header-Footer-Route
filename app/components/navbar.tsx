import Link from 'next/link';
import Image from 'next/image';
export default function Navbar (){
    return (
        <div className="flex justify-around bg-gray-200 ">
            
            <h2>
                <ul className="flex gap-x-20" >
                <li className="text-black"><Link href="./">Home</Link>
                   
                    </li>
                    <li>
                    <Link href="./contactus">Sport</Link>
                    </li>
                    <li > <Link href="./about">About</Link>
                    
                    </li>                
                </ul>
            </h2>
        </div>
    )
}
