export default function Orders() {
    const title = {};

    return (
        <div className="p-6 font-poppins bg-white shadow-md rounded-lg">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col">
                    <span className="text-3xl font-extrabold text-green-600">Orders</span>
                    <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500 font-medium">
                        <span>Dashboard</span>
                        <span>/</span>
                        <span>Order List</span>
                    </div>
                </div>

                <div id="action-button">
                <button className="bg-gray-800 hover:bg-gray-600 text-white px-5 py-2 rounded-lg shadow transition duration-300">
                    + Add Order
                </button>
            </div>
            </div>

            {/* Placeholder for Order List Content */}
            <div className="text-gray-500 italic">
                (Order list content will appear here...)
            </div>
        </div>
    );
}
