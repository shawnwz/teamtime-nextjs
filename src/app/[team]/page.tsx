import {testUsers} from '@/constants';
import UserCard from '@/components/cards/UserCard';

export default function Team() {
  return (
    <>
      {testUsers.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          username={user.username}
          desc={user.desc}
          imgUrl={user.imgUrl}
          time={user.time}
          location={user.location}/>
      ))}
    </>
  );
}
