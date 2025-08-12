import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function index() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Message Board</h1>
                <p className="text-lg text-gray-700">This is a simple message board application.</p>
            </div>
            <Footer />
        </div>
    );
}
