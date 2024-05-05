import { signIn, signOut } from "auth"
import { Button } from "./ui/button"

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form className='flex ml-auto'
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form className='flex ml-auto'
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <Button {...props}>
        Sign Out
      </Button>
    </form>
  )
}
