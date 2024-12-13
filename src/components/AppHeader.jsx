import { NavLink } from 'react-router-dom'

export default function AppHeader() {

    return (
        <header className='d-flex align-items-center'>
            <div className="container">
                <nav>
                    <NavLink to="/movies" className="text-decoration-none text-primary">
                        <h1 className='mb-0'>React Movies!</h1>
                    </NavLink>
                </nav>
            </div>
        </header>

    )
}