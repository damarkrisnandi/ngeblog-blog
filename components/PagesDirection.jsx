import Link from "next/link";

const PagesDirection = ({ page, pages }) => {
    return (  
        <div className="flex flex-row">
            <PrevPageDirection page={page} pages={pages} />
            &nbsp;
            <NextPageDirection page={page} pages={pages} />
        </div>
    );
}

const NextPageDirection = ({ page, pages }) => {
    return (
            <div>
                { parseInt(page) !== pages ? (
                <Link href="/[page]" as={`/${parseInt(page) + 1}`}>
                    <button className='flex flex-col justify-center item-start p-5 border-2 rounded-lg 
                        transition-all duration-200 delay-75
                        hover:bg-blue-600 hover:text-white
                    '>
                        <p>Page Selanjutnya {'>>'}</p>  
                    </button>
                </Link>
            ) : null}
            </div>
    )
}

const PrevPageDirection = ({ page, pages }) => {
    return (
            <div>
                { parseInt(page) !== 1 ? (
                    <Link href="/[page]" as={`/${parseInt(page) - 1}`}>
                        <button className='flex flex-col justify-center item-start p-5 border-2 rounded-lg 
                            transition-all duration-200 delay-75
                            hover:bg-blue-600 hover:text-white
                        '>
                            <p>{'<<'} Page Sebelumnya</p>  
                        </button>
                    </Link>
                ) : null}
            </div>
        )
}
export default PagesDirection;