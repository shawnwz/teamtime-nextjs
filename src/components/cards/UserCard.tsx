"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  username: string;
  desc: string;
  imgUrl: string;
  time: string;
  location: string;
}

function UserCard({ id, name, username, desc, imgUrl, time, location }: Props) {
  const router = useRouter();

  return (
    <article className='user-card'>
      <div className='user-card_avatar'>
        <div className='relative h-12 w-12'>
          <Image
            src={imgUrl}
            alt='user_logo'
            fill
            className='rounded-full object-cover'
          />
        </div>

        <div className='flex-1 text-ellipsis'>
          <h4 className='text-base-semibold text-dark-1'>{name}</h4>
          {/*<p className='text-small-medium text-gray-1'>@{username}</p>*/}
          <p className='text-small-medium text-gray-1'>@{location}</p>
        </div>
        <div>
          <p className='text-body1-bold'>{time}</p>
        </div>
      </div>
    </article>
  );
}

export default UserCard;
