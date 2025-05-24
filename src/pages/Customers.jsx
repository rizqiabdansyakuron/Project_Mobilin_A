export default function Customers() {
    const title = {}
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    Customers
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    {/* <span id="breadcrumb-home" className="text-gray-500">Dashboard</span>
                    <span id="breadcrumb-separator" className="text-gray-500">/</span>
                    <span id="breadcrumb-current" className="text-gray-500">Order List</span> */}
                </div>
            </div>
            <div id="action-button">
                <button className="bg-gray-800 hover:bg-gray-600 text-white px-5 py-2 rounded-lg shadow transition duration-300">
                    + Add Customer
                </button>
            </div>
        </div>
    );
}