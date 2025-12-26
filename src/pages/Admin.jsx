import React, { useState } from 'react';
import axios from 'axios';
import { Upload, CheckCircle, AlertCircle, Package, Layers, tag, IndianRupee, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Admin = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: null
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            const file = files[0];
            setFormData({ ...formData, image: file });
            setImagePreview(URL.createObjectURL(file));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('price', formData.price);
        data.append('image', formData.image);

        try {
            await axios.post('https://eccomerce-g27f.onrender.com/api/products', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setMessage({ type: 'success', text: 'Product successfully added to catalogue!' });
            setFormData({ name: '', description: '', price: '', image: null });
            setImagePreview(null);
        } catch (error) {
            setMessage({ type: 'error', text: error.response?.data?.error || 'Failed to add product' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Backend Panel</span>
                    <h1 className="text-6xl font-black text-slate-900 tracking-tighter mt-4">Add New Inventory</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* LEFT: Form Section */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-100"
                        >
                            {message && (
                                <div className={`p-6 rounded-2xl flex items-center gap-4 mb-8 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'}`}>
                                    {message.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
                                    <span className="font-bold text-lg">{message.text}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-4">
                                    <label className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                                        <Package size={14} className="text-emerald-500" /> Product Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-50 border-none rounded-2xl p-5 font-bold text-slate-900 text-lg placeholder-slate-300 focus:ring-2 focus:ring-emerald-500 transition-all"
                                        placeholder="e.g. Mantra MFS100"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                                        <Layers size={14} className="text-emerald-500" /> Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full bg-slate-50 border-none rounded-2xl p-5 font-medium text-slate-700 text-lg placeholder-slate-300 focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                                        placeholder="Technical specifications and features..."
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                                        <IndianRupee size={14} className="text-emerald-500" /> Price
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-slate-400">₹</span>
                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-slate-50 border-none rounded-2xl p-5 pl-10 font-black text-slate-900 text-lg placeholder-slate-300 focus:ring-2 focus:ring-emerald-500 transition-all"
                                            placeholder="2499"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full bg-slate-900 text-white font-black text-xl py-6 rounded-2xl shadow-xl shadow-slate-300 hover:bg-emerald-600 hover:shadow-emerald-200 transition-all active:scale-95 flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? (
                                        <>Processing...</>
                                    ) : (
                                        <>Publish Product <Upload size={20} /></>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* RIGHT: Image Upload & Preview */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-white rounded-[3rem] p-8 shadow-2xl shadow-slate-200/50 border border-slate-100">
                            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <ImageIcon size={14} className="text-emerald-500" /> Product Image
                            </label>

                            <div className={`relative aspect-square rounded-[2.5rem] overflow-hidden border-2 border-dashed ${imagePreview ? 'border-emerald-500' : 'border-slate-200'} bg-slate-50 transition-all group hover:border-emerald-400`}>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleChange}
                                    accept="image/*"
                                    required={!imagePreview} // Not required if already set, but logic simplifies to always require for new upload
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                                />
                                {imagePreview ? (
                                    <div className="w-full h-full relative group-hover:opacity-90 transition-opacity">
                                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Change Image</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-slate-400 p-8 text-center group-hover:text-emerald-600 transition-colors">
                                        <div className="bg-white p-6 rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Upload size={32} />
                                        </div>
                                        <p className="font-bold text-sm">Click to upload or drag & drop</p>
                                        <p className="text-[10px] uppercase font-bold tracking-widest mt-2 opacity-50">High Res Recommended</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tip Card */}
                        <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-[2.5rem] p-8 text-white shadow-xl shadow-emerald-200">
                            <h3 className="font-black text-xl mb-2">Pro Tip</h3>
                            <p className="text-emerald-100 font-medium text-sm leading-relaxed">
                                Upload images with a transparent background (PNG) for the best result on our premium product cards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
