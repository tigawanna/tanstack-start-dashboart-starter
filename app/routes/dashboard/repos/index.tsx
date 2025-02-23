import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/repos/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/repos/"!</div>
}
