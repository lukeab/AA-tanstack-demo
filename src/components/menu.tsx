import { Link } from '@tanstack/react-router'
import { Button } from '@mantine/core'

export function Menu() {
  return (
    <>
      <Link to="/">
        <Button variant="subtle">Home</Button>
      </Link>
    </>
  )
}