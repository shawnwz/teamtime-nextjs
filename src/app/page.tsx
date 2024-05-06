import {testTeams, testUsers} from '@/constants';
import TeamCard from '@/components/cards/TeamCard';
import {auth} from 'auth';
import {SignIn} from '@/components/auth-components';
import Welcome from '@/components/welcome';
import {useSession} from 'next-auth/react';

export default async function Home() {
  const session = await auth()

  if(!session?.user) return (
    <Welcome />
  )
  return (
    // <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
    <>
      <p>{JSON.stringify(session)}</p>
      <p>========</p>
      {testTeams.map((team) => (
        <TeamCard
          key={team.id}
          id={team.id}
          name={team.name}
          desc={team.desc}
          logo={team.logo}
        />
      ))}
    </>

    //
    // </main>
  );
}
