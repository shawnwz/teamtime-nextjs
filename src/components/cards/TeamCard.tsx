"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from 'next/link';

interface Props {
  id: string;
  name: string;
  logo: string;
  desc: string;
}

function TeamCard({ id, name, logo, desc }: Props) {
  const router = useRouter();

  return (
    <Link href={`/${name}`}>
      <article className='team-card'>
        <div className='team-card_logo'>
          <div className='relative h-12 w-12'>
            <Image
              src={logo}
              alt='team_logo'
              fill
              className='rounded-full object-cover'
            />
          </div>

          <div className='flex-1 text-ellipsis'>
            <h4 className='text-base-semibold text-dark-1'>{name}</h4>
            {/*<p className='text-small-medium text-gray-1'>@{username}</p>*/}
            <p className='text-small-medium text-gray-1'>{desc}</p>
          </div>
        </div>
      </article>
    </Link>

  );
}

export default TeamCard;
