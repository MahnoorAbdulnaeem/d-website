import Image from "next/image"
import Link from "next/link"
import React from "react";

// function Navbar() {
//     return (
//         <div className="bg-[#45242a] top-40">
//             <header className="text-white body-font ">
//                 <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                     <a className="flex title-font font-medium itemcenter text-white mb-4 md:mb-0">
//                         <Image src={require("../../../public/images/Anzar-Media-Logo-T.webp")} alt="pic" width={100} height={100} className="w-[50px]" >
//                         </Image>
//                     </a>
//                     <nav className="md:ml-auto md:mr-end items-end text-base justify-center font-medium">
//                         <ol className="flex items-start">
//                         <Link href={"/"} className='mr-10 text-black-500'>Home</Link>
//       <Link href={"#"} className='mr-10 text-black-500'>Strategy</Link>
//       <Link href={"#"} className='mr-10 text-black-500'>our work</Link>
//       <Link href={"#"} className='mr-10 text-black-500'>About</Link>
//       <Link href={"#"} className='mr-1  text-black-500'>Contact</Link>
//                         </ol>
//       <Image src={require("../../../public/images/en.svg")} alt="pic2"width={20} height={20} className="w-[20px]">
//       </Image>
//       <button className="text-white">
//         <div>
//             click me 
//         </div>
//       </button>

//     </nav>
//                 </div>

//             </header>

//         </div>

//     )
// }
// export default Navbar

//////////////////////////////////////////////////////////////////////////////////////



// function Navbar() {
//     return (
//         <div className="bg-[#45242a] backdrop-blur-sm fixed top-0 left-0 w-full z-10">
//             <header className="text-white body-font">
//                 <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
//                     <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//                         <Image src="/images/Anzar-Media-Logo-T.webp" alt="logo" width={100} height={100} className="w-[50px]" />
//                     </a>
//                     <nav className="flex items-center space-x-8 text-base font-medium">
//                         <Link href="/" className='text-white hover:text-gray-300'>Home</Link>
//                         <Link href="#" className='text-white hover:text-gray-300'>Strategy</Link>
//                         <Link href="#" className='text-white hover:text-gray-300'>Our Work</Link>
//                         <Link href="#" className='text-white hover:text-gray-300'>About</Link>
//                         <Link href="#" className='text-white hover:text-gray-300'>Contact</Link>
//                         <Image src="/images/en.svg" alt="flag" width={20} height={20} className="w-[20px]" />
//                         <button className="text-white bg-[#dbdddf] px-4 py-4 rounded-lg hover:bg-[#bfc0c1]">
//                             Free consultation
//                         </button>
//                     </nav>
//                 </div>
//             </header>
//         </div>
//     )
// }

// export default Navbar;







// function Navbar() {
//         return (
//             <div className="bg-[#45242a] backdrop-blur-sm fixed top-0 left-0 w-full z-10">
//                 <header className="text-white body-font">
//                     <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
//                         <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//                             <Image src="/images/Anzar-Media-Logo-T.webp" alt="logo" width={100} height={100} className="w-[50px]" />
//                         </a>
//                         <nav className="flex items-center space-x-8 text-base font-medium">
//                             <Link href="/" className='text-white hover:text-gray-300'>Home</Link>
//                             <Link href="#" className='text-white hover:text-gray-300'>Strategy</Link>
//                             <Link href="#" className='text-white hover:text-gray-300'>Our Work</Link>
//                             <Link href="#" className='text-white hover:text-gray-300'>About</Link>
//                             <Link href="#" className='text-white hover:text-gray-300'>Contact</Link>
//                             <Image src="/images/en.svg" alt="flag" width={20} height={20} className="w-[20px]" />
//                             <button className="text-white bg-[#dbdddf] px-4 py-4 rounded-lg hover:bg-[#bfc0c1]">
//                                 Free consultation
//                             </button>
//                         </nav>
//                     </div>
//                 </header>
//             </div>
//         )
//     }
    
//     export default Navbar;
    

//////////////// ye nabr lagi hue thi 

// const Navbar=()=>{
//     return (
//         <div className="bg-[#45242a] backdrop-blur-sm fixed top-0 left-0 w-full z-10 position: relative;">
//             <header className="text-white body-font top-0">
//                 <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
//                     <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//                         <Image src="/images/Anzar-Media-Logo-T.webp" alt="logo" width={100} height={100} className="w-[50px]" />
//                     </a>
//                     <nav className="flex items-center space-x-12 text-base font-medium"> {/* Adjust space-x-6 for more space */}
//                         <Link href={"/"} className='text-white hover:text-gray-300'>Home</Link>
//                         <Link href="#" className='text-white hover:text-gray-300'>Strategy</Link>
//                         <Link href="#" className='text-white hover:text-gray-300'>Our Work</Link>
//                         <Link href="#" className='text-white hover:text-gray-300'>About</Link>
//                         <Link href="#" className='text-white hover:text-gray-300'>Contact</Link>
//                         <Image src="/images/en.svg" alt="flag" width={20} height={20} className="w-[20px]" />
//                         <button className="text-black bg-[#dbdddf] px-4 py-2  hover:bg-white w-56 bottom-40" > {/* Adjusted padding */}
//                             Free consultation
//                         </button>
//                     </nav>
//                 </div>
//             </header>
//         </div>
//     )
// }

// export default Navbar;


////////////////////
const Navbar=()=>{
    return (
        <div className="bg-[#45242a] backdrop-blur-sm fixed top-0  w-full z-40 position: relative;">
            <header className="text-white body-font top-0">
                <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <Image src="/images/Anzar-Media-Logo-T.webp" alt="logo" width={6000} height={100} className="w-[90px] " />
                    </a>
                    <nav className="flex items-center space-x-6 text-base font-bold"> {/* Adjust space-x-6 for more space */}
                        <Link href={"/"} className='text-white hover:text-gray-300'>Home</Link>
                        <Link href="#" className='text-white hover:text-gray-300'>Strategy</Link>
                        <Link href="#" className='text-white hover:text-gray-300'>Our Work</Link>
                        <Link href="#" className='text-white hover:text-gray-300'>About</Link>
                        <Link href="#" className='text-white hover:text-gray-300'>Contact</Link>
                        <Image src="/images/en.svg" alt="flag" width={20} height={20} className="w-[20px]" />
                        <button className="text-black bg-[#dbdddf] px-6 py-2  hover:bg-white w-56 bottom-40" > {/* Adjusted padding */}
                            Free consultation
                        </button>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar;
