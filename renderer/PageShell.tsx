import React, { useLayoutEffect } from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.scss'
import { Link } from './Link'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Sidebar>
            <div className="logo">N . M</div>
            <a href="https://www.linkedin.com/in/nzuzo-malinga-70a8a3b2/" className='logo-right-2'><img src="/assets/svgs/linkedin.svg" alt="git" /></a>
            <a href="https://github.com/nzuzomalinga" className='logo-right'><img src="/assets/svgs/github-mark.svg" alt="git" /></a>
            <Link className="navitem" href="/">
              Home
            </Link>
            <Link className="navitem" href="/about">
              About
            </Link>
          </Sidebar>
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        margin: '0'
      }}
    >
      {children}
    </div>
  )
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className='navbar'
      style={{
        padding: 20,
        flexShrink: 0,
        position:'relative',
        display: 'flex',
        justifyContent:"center",
        flexDirection: 'row',
        gap:"16px",
        alignItems: 'center',
        lineHeight: '1.8em',
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className='main-content'
      style={{
        padding: 0,
        paddingBottom: 0,
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}


