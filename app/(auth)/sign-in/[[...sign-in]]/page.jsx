// This type of folder strucutre is called as Catch all route

//[[...sign-in]]
// [[...sign-up]]


//(auth) -> called as Route group by giving this this name wouldn't be considered under the routes by using this
// we can organize the route groups.. Clearly..


// Above two folder strucures are called as Catch-all Routes..

import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <SignIn />
  )
}

export default page
