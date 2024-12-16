import 'ldrs/lineSpinner'


export default function Loader() {


    return (
        <>
            <div className='loading_text text-center mb-4'>Loading...</div>
            <div className="loader d-flex align-items-center justify-content-center">
                <l-line-spinner
                    size="100"
                    stroke="3"
                    speed="1"
                    color="white"
                ></l-line-spinner>
            </div>
        </>
    )
}