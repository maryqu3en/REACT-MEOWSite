import React from "react";

const Main = () => {
    return (
        <main className="bg-primary p-6 flex-1 flex flex-col items-center justify-center space-y-6 font-body text-secondary">
            <h1 className="text-7xl font-bold text-tertiary">Welcome to MEOWSite</h1>
            <p className="text-lg mt-4 text-center">
                The best place for cat lovers to share their love of cats. Discover new breeds, share your experiences, and connect with a community of cat enthusiasts.
            </p>
            <section className="text-center">
                <h2 className="text-4xl font-bold">Join Our Community</h2>
                <p className="text-lg mt-2">Sign up to share your cat stories and meet other cat lovers.</p>
                    <a href="https://discord.gg/KDZm9HZNfY" target="_blank">
                    <button className="mt-4 px-6 py-2 rounded bg-tertiary text-primary hover:bg-accent hover:text-tertiary transition duration-300">
                        Sign Up
                    </button>
                    </a>
            </section>
        </main>
    );
}

export default Main;