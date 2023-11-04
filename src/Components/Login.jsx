// AuthForm.js
import React, { useState } from 'react';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-red-500">
                        {isLogin ? 'Log in' : 'Sign up'}
                    </h2>
                </div>
                <form className="mt-8 space-y-6">
                    {!isLogin && (
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Full Name</span>
                                <input
                                    className="mt-1 p-2 w-full border rounded-md"
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                />
                            </label>
                        </div>
                    )}
                    <div>
                        <label className="block">
                            <span className="text-gray-700">Email Address</span>
                            <input
                                className="mt-1 p-2 w-full border rounded-md"
                                type="email"
                                required
                                placeholder="john.doe@example.com"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block">
                            <span className="text-gray-700">Password</span>
                            <input
                                className="mt-1 p-2 w-full border rounded-md"
                                type="password"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            {isLogin ? 'Log in' : 'Sign up'}
                        </button>
                    </div>
                </form>
                <div className="mt-6">
                    <button
                        className="text-red-500"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Don’t have an account? Sign up' : 'Already have an account? Log in'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;
