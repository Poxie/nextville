import BookList from "./BookList";

export default function Books() {
    return(
        <section className="main-width py-32">
            <h2 className="mb-8 text-5xl">
                Some good reads
            </h2>
            <BookList />
        </section>
    )
}