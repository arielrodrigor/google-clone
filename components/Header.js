import React, {useRef} from 'react';
import Image from "next/image";
import {useRouter} from "next/router";
import {MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon} from "@heroicons/react/24/solid";
import Avatar from "@/components/Avatar";
import HeaderOptions from "@/components/HeaderOptions";
function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`)
    }
    return (
        <header className={'sticky bg-white '}>
            <div className={'flex w-full p-6 items-center'}>
                <Image
                    className={'cursor-pointer'}
                    src={'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}
                    onClick={() => router.push('/')}
                    alt={'Google Logo'} height={40} width={120}/>
                <form className={'flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'}>
                    <input  ref={searchInputRef}  type={'text'} className={'flex-grow focus:outline-none'} defaultValue={router.query.term}/>
                    <XMarkIcon className={'h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 '}
                               onClick={() => searchInputRef.current.value = ""}/>
                    <MicrophoneIcon className={'h-6 mr-3 text-blue-500 hidden sm:inline-flex border-l-2 pl-4 border-gray-300'}/>
                    <MagnifyingGlassIcon className={'h-6 mr-3 text-blue-500 hidden sm:inline-flex'}/>
                    <button hidden type={'submit'} onClick={search}>Search</button>
                </form>
                <Avatar className={'ml-auto'} url={'https://firebasestorage.googleapis.com/v0/b/instagram-clone-86dda.appspot.com/o/posts%2FofNZ4DHODywDC28Jf7sw%2Fimage?alt=media&token=76c6ee83-be24-491f-bf38-ff86b32b110b'}/>

            </div>
            {/*Header options*/}
            <HeaderOptions />



        </header>
    );
}

export default Header;