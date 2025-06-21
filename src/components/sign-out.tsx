import React from 'react'
import { doLogout } from '@/app/actions'
import { Button } from './ui/button'

const SignOut = () => {
  return (
    <form action={doLogout}>
      <Button type="submit">SignOut</Button>
       </form>
  )
}

export default SignOut