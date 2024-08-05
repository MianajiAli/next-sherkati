"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Contact: React.FC = () => {
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic phone number validation
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(phone)) {
            setError('لطفا شماره تماس معتبر وارد کنید');
            setMessage('');
            return;
        }

        // Clear error and set success message
        setError('');
        setMessage('با تشکر! ما به زودی با شما تماس خواهیم گرفت');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    return (
        <div dir='rtl' className="flex flex-col items-center justify-center p-6 bg-secondary rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">تماس با ما</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <label className="block text-lg mb-2 text-gray-700">
                    لطفا شماره تماس خود را وارد کنید:
                </label>
                <input
                    type="tel"
                    value={phone}
                    onChange={handleChange}
                    placeholder="شماره تماس"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                    type="submit"
                    className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
                >
                    ارسال
                </button>
                {message && <p className="mt-4 text-green-500">{message}</p>}
            </form>
        </div>
    );
}

export default Contact;
