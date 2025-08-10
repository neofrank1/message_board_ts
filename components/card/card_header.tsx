function CardHeader() {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-100 border-b-1">
            <h2 className="text-xl font-semibold text-gray-800">Card Header</h2>
            <button className="text-gray-600 hover:text-gray-800">Action</button>
        </div>
    );
}

export default CardHeader;