"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { blogPosts } from "../../../data/blogpost"; // Import data
const Card = () => {
    const router = useRouter();

    const handleReadMore = (id: number) => {
        router.push(`/blog/${id}`);
    };

        return (
            <div>
                <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
                    <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
                            Latest Blog Posts
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
                            {blogPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="relative overflow-hidden group">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={400}
                                            height={200}
                                            className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-orange-500 hover:underline transition-colors duration-200">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm hover:text-orange-500 hover:underline transition-colors duration-200">
                                            {post.content}
                                        </p>
                                        <p className="text-orange-500 text-[13px] font-semibold mt-4">
                                            {post.date}
                                        </p>
                                        <button
                                            onClick={() => handleReadMore(post.id)}
                                            className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] transition-transform transform hover:scale-105"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
export default Card;
