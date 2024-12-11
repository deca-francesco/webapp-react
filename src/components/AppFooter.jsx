export default function AppFooter() {


    return (
        <footer>
            <div className="container">
                <h5 className="mb-0">&copy; <span>{new Date().getFullYear()}</span> FDC</h5>
            </div>
        </footer>
    )
}