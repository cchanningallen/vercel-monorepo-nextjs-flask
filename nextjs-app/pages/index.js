import Head from "next/head";
import { useState } from "react";

export default function Home() {
    const [data, setData] = useState([]);

    const loadData = () =>
        fetch("/api/test")
            .then((res) => res.json())
            .then(({ data }) => {
                console.log(data);
                setData(data);
            });

    const clearData = () => setData([]);

    return (
        <div className="min-h-screen flex flex-col items-center">
            <Head>
                <title>Monorepo Test App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="max-w-md w-full p-8 flex flex-col items-center">
                <button
                    className="w-full px-4 py-2 mb-4 rounded border-2 border-indigo-700 bg-indigo-400 text-indigo-700"
                    onClick={loadData}
                >
                    Load Data
                </button>
                {!!data.length && (
                    <button
                        className="w-full px-4 py-2 mb-4 rounded border-2 border-red-700 bg-red-50 text-red-700"
                        onClick={clearData}
                    >
                        Clear
                    </button>
                )}

                {!!data.length &&
                    data.map(({ id, first_name, last_name }) => (
                        <div
                            key={id}
                            className="w-full mt-2 p-4 border-2 rounded"
                        >
                            {first_name} {last_name}
                        </div>
                    ))}
            </div>
        </div>
    );
}
