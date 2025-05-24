import PageHeader from "../components/PageHeader";

export default function NotFound() {
    return(
        <div className="flex items-center justify-center min-h-screen ">
            <div className="text-center">
                <div id="pageheader-left" className="flex flex-col">
                    <span id="page-title" className="text-3xl font-semibold p-5">
                        404
                    </span>
                    <p>Sorry, the content you're looking for doesn't exist.</p>
                    <p>Either it was removed, or you mistyped the link.</p>
                </div>
                <div className="flex items-center justify-center p-10 space-x-4">
                    <div className="bg-hijau text-white px-4 py-2 rounded-lg cursor-pointer">Go to Homepage</div>
                    <div className="text-hijau px-4 py-2 rounded-lg border cursor-pointer">Contact Us</div>
                </div>
            </div>
        </div>
    )
}