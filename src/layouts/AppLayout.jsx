import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import { Outlet } from "react-router-dom"


export default function AppLayout() {

    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}