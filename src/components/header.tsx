import {SignIn, SignOut} from '@/components/auth-components';
import {auth} from 'auth';
import Image from 'next/image';
import icon from '../../public/icon.svg'
export default async function Header() {
  const session = await auth()
  return (
    <header className='flex flex-row p-5'>
      <nav className='flex flex-row w-full'>
        <a href="http://localhost:3000" className="flex flex-row ">
          <Image src={icon} className="w-10 mr-2" alt="Logo"/>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Team Time</span>
        </a>
        {session && session.user ? <SignOut className='text-xl font-semibold whitespace-nowrap dark:text-white'/>
          : <SignIn className='text-xl font-semibold whitespace-nowrap dark:text-white'/>}
      </nav>
    </header>

  )
}
