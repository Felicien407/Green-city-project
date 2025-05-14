import { useState } from "react";
import { axiosInstance } from "../lib/axios"; // Adjust path as needed
import { Link } from "react-router-dom";

const AddProductPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        code: "",
        stock: "",
        image: null,
    });

    const [previewUrl, setPreviewUrl] = useState(null);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image") {
            const file = files[0];
            setFormData((prev) => ({ ...prev, image: file }));

            if (file) {
                setPreviewUrl(URL.createObjectURL(file));
            } else {
                setPreviewUrl(null);
            }
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const seedData = new FormData();
        seedData.append("name", formData.name);
        seedData.append("code", formData.code);
        seedData.append("stock", formData.stock);
        seedData.append("image", formData.image);

        try {
            await axiosInstance.post("/seeds", seedData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setMessage("Seed product added successfully!");
            setFormData({ name: "", code: "", stock: "", image: null });
            setPreviewUrl(null);
        } catch (error) {
            console.error("Error adding seed:", error.response?.data || error.message);
            setMessage("Failed to add seed. Try again.");
        }
    };

    return (
        <div className="min-h-screen bg-[#111827] text-white p-6">
            <Link to={"/dashboard/products"} className={`btn btn-sm gap-2`}>
                <span className="hidden sm:inline border rounded-lg">View products</span>
            </Link>
            <h1 className="text-3xl font-bold mb-4">Add New Seed</h1>

            <form
                onSubmit={handleSubmit}
                className="bg-[#1f2937] p-6 rounded-lg shadow-lg max-w-xl"
                encType="multipart/form-data"
            >
                <div className="mb-4">
                    <label className="block mb-1">Seed Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter seed name"
                        className="w-full px-4 py-2 bg-[#374151] text-white rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Seed Code</label>
                    <input
                        type="text"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                        placeholder="E.g. SD-001"
                        className="w-full px-4 py-2 bg-[#374151] text-white rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Stock Quantity</label>
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        placeholder="E.g. 100"
                        className="w-full px-4 py-2 bg-[#374151] text-white rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Upload Seed Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-[#374151] text-white rounded"
                        required
                    />
                    {previewUrl && (
                        <img
                            src={previewUrl}
                            alt="Seed Preview"
                            className="mt-4 w-40 h-40 object-cover rounded border border-gray-600"
                        />
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 transition py-2 rounded font-semibold"
                >
                    Add Seed
                </button>

                {message && (
                    <p className="mt-4 text-sm text-gray-300 bg-[#374151] px-4 py-2 rounded">
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default AddProductPage;
