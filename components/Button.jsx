"use client"

export default function Button({ className, children }) {
    return (
        <button className={`border-red-500 border-2 rounded-full p-2 transition ease-in-out delay-300 hover:bg-red-500 ${className}`}>{children}</button>
    )
}
