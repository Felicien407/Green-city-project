import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { Link } from "react-router-dom";

const ProductsPage = () => {
    const [seeds, setSeeds] = useState([]);
    const [loading, setLoading] = useState(true);

    const getStatus = (stock) => {
        if (stock === 0) return { label: "Out of Stock", color: "bg-red-600" };
        if (stock < 10) return { label: "Low Stock", color: "bg-yellow-500" };
        return { label: "Available", color: "bg-green-600" };
    };

    useEffect(() => {
        const fetchSeeds = async () => {
            try {
                const res = await axiosInstance.get("/seeds");
                setSeeds(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching seed products:", err);
                setLoading(false);
            }
        };

        fetchSeeds();
    }, []);

    return (
        <div className="min-h-screen bg-[#111827] text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Seed Products</h1>

            <div className="flex m-3">

                <Link to={"/dashboard/add-product"} className={`btn btn-sm gap-2`}>
                    <span className="hidden sm:inline border rounded-lg">Add more products</span>
                </Link>
                <Link to={"/dashboard"} className={`btn btn-sm gap-2`}>
                    <span className="hidden sm:inline border rounded-lg">Back to Dashboard</span>
                </Link>
            </div>

            {loading ? (
                <p className="text-gray-400">Loading seed products...</p>
            ) : (
                <div className="overflow-x-auto bg-[#1f2937] p-4 rounded-lg shadow-lg">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-[#374151] text-gray-200">
                                <th className="px-6 py-3 text-left text-sm font-medium">Image</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Seed Name</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Code</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Stock</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {seeds.map((seed) => {
                                const status = getStatus(seed.stock);
                                return (
                                    <tr
                                        key={seed.id}
                                        className="border-b border-gray-700 hover:bg-[#2d3748] transition"
                                    >
                                        <td className="px-6 py-4">
                                            <img
                                                src={seed.image}
                                                alt={seed.name}
                                                className="w-12 h-12 object-cover rounded-md"
                                            />
                                        </td>
                                        <td className="px-6 py-4">{seed.name}</td>
                                        <td className="px-6 py-4">{seed.code}</td>
                                        <td className="px-6 py-4">{seed.stock}</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`text-xs font-medium px-3 py-1 rounded-full ${status.color}`}
                                            >
                                                {status.label}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded-md text-sm transition">
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
