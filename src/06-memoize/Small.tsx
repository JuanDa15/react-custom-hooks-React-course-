import { PropsWithChildren, memo } from "react";

const Small = memo(({ children }: PropsWithChildren) => {
  console.log('me renderize')
  return (
    <small>{children}</small>
  )
})

export default Small