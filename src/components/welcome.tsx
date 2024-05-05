import prisma from '@/lib/prisma';

export const getServerSideProps = async () => {
  const teams = await prisma.team.findMany()
  return { props: {teams}}
}

function Welcome() {
  const t = getServerSideProps();
  return(
    <div>
      This is welcome page {JSON.stringify(t)}
    </div>
  )
}

export default Welcome;
