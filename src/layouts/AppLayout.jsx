import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import { Outlet } from "react-router-dom"
import Loader from "../components/Loader"
import GlobalContext from "../contexts/GlobalContext"
import { useContext } from "react"


export default function AppLayout() {

    const { loading } = useContext(GlobalContext)

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