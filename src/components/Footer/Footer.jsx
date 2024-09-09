import footer from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer>
            <div className={footer.Container}>
                <div>
                    <p>Address:</p>
                    <p>Somestreet 232</p>
                    <p>Luxemburg</p>
                </div>
                <div>
                    <p>Contact:</p>
                    <p>Email: somemail@mail.com</p>
                    <p>Phone: 44332343</p>
                </div>
                <div>
                    <p>With special thanks to</p>
                    <p>https://dictionaryapi.dev/</p>
                    <p>For the awesome API</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h2>Lexiconline</h2>
                </div>
            </div>
        </footer>
    )
}