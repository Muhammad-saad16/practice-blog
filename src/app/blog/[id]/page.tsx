'use client'

import { useState } from 'react'

const blogPosts: Record<number, {title: string, content: string, date: string, image?: string}> = {
  1: {
    title: "What is AI?",
    content: `I wish I knew about these sooner (especially the 2nd and the 5th ones). I use those two all the time.
     And these Prompts are not in any order and also don't serve one usecase (each has it's own usecase).
     Feel free to try all 5 and let me know if these helped or not. And since we're talking about usecases for ChatGPT, What's your favorite ChatGPT Usecase? Leave that in the comments and I'll create Prompts for that in my next Articles.
     I've left the Download link to all the Prompts below.
     `,
    date: "25 December 2024",
    image: "/chatgpt.webp",
  },
  2: {
    title: "7 Ways to Make $1000 or More this Month with ChatGPT",
    content: `What if I told you that ChatGPT has made me over $2k last month and you can do the same very easily in a few clicks.
     Here's the Proof

If you want to see similar or better results, than all you have to do is pay close attention for the next 2–3 Minutes.

This is not another one of those Making Money Online articles, you read everyday. I'm going to share all the details on why it works, how it works and (most importantly) will it work for you.

Let's start
     `,
    date: "25 December 2024",
    image: "/chat1.webp",
  },
  3: {
    title: "Google's Gemini AI Chatbot Shockingly Tells A User To Die",
    content: `Today, I came across a post on Reddit about Google's Gemini AI chatbot telling a kid to die. I was shocked to see this and I wanted to know more about it. So, I did some research and found out that this is not the first time Google's AI has done something like this.`,
    date: "25 December 2024",
    image: "/chat2.webp",
  },
  4: {
    title: "Claude 3.5 — The King of Document Intelligence",
    content: `A while back, I wrote an article highlighting the use of Claude 3 in data extraction. In it, we explored the new Claude 3 models, the industry's first to include images. Since then, using images as input has become an industry standard, and various sizes of LLMs have emerged.

The release of Claude 3 mostly solved document extraction, but since then, the maturity of the models has allowed us to finally have a "near perfect" out-of-the-box document intelligence processing pipeline without relying on expensive or vendor-locked products.

In this article, we will build with the newly released models and explore an IDP solution, that can be used in production, matching SOTA solutions in the market.`,
    date: "25 December 2024",
    image: "/chat3.webp",
  },
  5: {
    title: "Why Perplexity AI Has Been a Game Changer For Me",
    content: `First off, I want to make it clear that all my articles are written by me, not AI. While I'm a huge supporter of this technology and its many uses, writing remains my guilty pleasure!
     I've been using the Pro version of Perplexity for several months now, and I can confidently say one thing: I can't live without it! To give you an idea, I've even configured my Google Chrome to automatically open both a ChatGPT window and a Perplexity window whenever I start a session.
     Now, let's get to the point. I didn't want to write a post just listing Perplexity's features (because there are a lot), but rather, I wanted to share the three main ways I use it, so you can truly grasp the potential of this tool.
     `,
    date: "25 December 2024",
    image: "/chat4.webp",
  },
  6: {
    title: "ChatGPT, Gemini, Claude, and Perplexity All Went Down In 24 Hours",
    content: `In one of the rarest moments in AI history, three of the biggest AI chatbots — OpenAI's ChatGPT, Google's Gemini, Anthropic's Claude, and Perplexity — all went down within 24 hours.

ChatGPT alone has over 100 million active users worldwide, so the disruption affected a massive volume of users globally.

This unprecedented event raises questions: Was it caused by an unexpected surge in usage or a cyberattack?.`,
    date: "25 December 2024",
    image: "/chat5.webp",
  },
}

export default function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const post = blogPosts[id]

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([])
  const [newName, setNewName] = useState<string>("")
  const [newComment, setNewComment] = useState<string>("")

  if (!post) {
    return <p className="text-center text-red-500">Blog post not found.</p>
  }

  const addComment = () => {
    if (newName.trim() && newComment.trim()) {
      setComments([...comments, { name: newName, comment: newComment }])
      setNewName("")
      setNewComment("")
    }
  }

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto text-center bg-slate-100">
      {/* Blog Post Content */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto font-sans mt-6">
        <div className="p-4 md:p-6">
          <h1 className="text-gray-900 text-xl md:text-2xl font-bold mb-4 hover:text-orange-400 hover:underline transition-colors duration-200">
            {post.title}
          </h1>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto mb-4 rounded-md"
            />
          )}
          <p className="text-sm text-gray-800 leading-relaxed mb-4">
            {post.content}
          </p>
          <p className="text-sm text-orange-500 font-semibold">
            Published on: {post.date}
          </p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto p-4 md:p-6 mt-8 max-w-3xl">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500 italic">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded shadow-sm text-left"
              >
                <p className="font-bold text-gray-700">{comment.name}:</p>
                <p className="text-gray-600">{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Add Comment Form */}
        <div className="mt-6">
          <label htmlFor="name" className="sr-only">Your name</label>
          <input
            type="text"
            id="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Your name..."
            className="border border-gray-300 p-2 rounded w-full mb-3 focus:ring-2 focus:ring-orange-500"
          />
          <label htmlFor="comment" className="sr-only">Your comment</label>
          <textarea
            id="comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            className="border border-gray-300 p-2 rounded w-full mb-3 h-20 focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            onClick={addComment}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full transition-colors duration-200"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  )
}

