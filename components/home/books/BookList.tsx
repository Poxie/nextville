import books from '@/assets/books.json';
import Image from 'next/image';

export default function BookList() {
    return(
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {books.map(book => (
                <li 
                    className="flex bg-secondary border-[1px] border-tertiary rounded"
                    key={book.title}
                >
                    <Image 
                        width={96}
                        height={149}
                        src={`/imgs/books/${book.image}`}
                        className='aspect-[9/12]'
                        alt=""
                    />
                    <div className="p-4 flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                            <span className="line-clamp-2">
                                {book.title}
                            </span>
                            <span className="text-sm text-secondary">
                                by {book.author}, {book.year}
                            </span>
                        </div>
                        <span className="text-sm text-secondary italic">
                            {book.theme}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    )
}