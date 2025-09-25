// src/routes/__root.tsx
/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { MantineProvider, AppShell, Burger, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import '@mantine/core/styles.css'
import { Menu } from '@/components/menu'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Fileupload Demo',
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <div>404 Not Found</div>,
  errorComponent: () => <div>500 Server Error</div>,
})

function RootComponent() {
  const [opened, { toggle }] = useDisclosure()
  return (
    <RootDocument>
      <MantineProvider>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header>
            <Group h="100%" px="md">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
            </Group>
          </AppShell.Header>
          <AppShell.Navbar p="md">
            <Menu />
          </AppShell.Navbar>
          <AppShell.Main>
            <Outlet />
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}