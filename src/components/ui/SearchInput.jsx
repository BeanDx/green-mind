const SearchInput = ({ placeholder, onChange }) => {
    return (
        <div className="relative mt-3 flex items-center">
            <input
                type="text"
                className="border rounded-md py-2 pl-8 pr-4 focus:outline-none focus:ring-0 bg-[#fffefe] w-[449px]"
                placeholder={placeholder}
                onChange={onChange}
            />
            <button type="button" className="absolute inset-y-0 left-0 pl-2 flex items-center">
                <img src="/search.svg" alt="search" />
            </button>
        </div>
    )
}
export default SearchInput;