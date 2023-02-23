export default function Home() {
    return( 
        <div className="container mt-0 position-relative" id="home">
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="d-flex justify-content-center gap-2 m-3">Bienvenidos a
                    <b>Happy Cake</b>
                </h1>
                <span className="fs-6 d-flex justify-content-center text-secondary m-3">
                    El lugar de los pasteles felices
                </span>
                <h3 className="fs-1 d-flex justify-content-center cake">
                    <a href="" className="text-decoration-none">
                        🎂
                    </a>
                </h3>
            </div>
        </div>
    )
}