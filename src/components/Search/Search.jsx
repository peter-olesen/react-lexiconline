import './Search.module.scss'

export const Search = () => {
    return (
        <section>
            <div>
                <h2>Enter a word to search for</h2>
                <form>
                    <input type="text" placeholder="Farmer" /><input type="button" value="Search" />
                </form>
            </div>
        </section>
    )
}