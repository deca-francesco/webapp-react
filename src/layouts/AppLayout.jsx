import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import { Outlet } from "react-router-dom"
import Loader from "../components/Loader"
import { useGlobalContext } from "../contexts/GlobalContext"

export default function AppLayout() {

    const { loading } = useGlobalContext()

    return (
        <>
            <AppHeader />
            <main>
                {loading ? <Loader /> : <Outlet />}
            </main>
            <AppFooter />
        </>
    )
}