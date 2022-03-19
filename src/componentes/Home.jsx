import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="d-flex flex-column container fullscreen ">
                <Header></Header>
                <main className="flex-grow-1">
                    <Outlet />
                </main>
                <Footer ></Footer>
            </div>
        </QueryClientProvider>
    )
}
