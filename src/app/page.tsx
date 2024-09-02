"use client";
import { QuoteTypes } from "@/types/quotesType";
import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState<QuoteTypes | null>(null);
  const [provider, setProvider] = useState<string>("");
  const [linkProvider, setLinkProvider] = useState<string>("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("/api/quotes");
        const rawData = await response.json();
        const quotesData = rawData.data;
        setQuote(quotesData);
        setProvider(rawData.provider);
        setLinkProvider(rawData.linkProvider);
      } catch (error) {
        alert("Error when providing a wisdom, Please refresh the page");
      }
    };

    fetchQuote();
  }, []);

  return (
    <main className="flex min-h-screen px-12 items-center justify-center bg-[#232323]">
      <div className="text-center">
        {quote ? (
          <div>
            <p className="text-white font-bold text-xl">{quote.quote}</p>
            <p className="text-gray-400 mt-2">- {quote.author}</p>
            <p className="text-gray-500 mt-1">{quote.anime}</p>
          </div>
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
      <footer className="absolute w-full flex flex-row justify-between bottom-0 left-0 p-4">
        <div>
          {provider ? (
            <p className="text-gray-500 text-sm">
              Quotes provided by{" "}
              <a href={linkProvider} target="_blank">
                {provider}
              </a>
            </p>
          ) : (
            <p className="text-gray-500">Loading...</p>
          )}
        </div>
        <div>
          <p className="text-gray-500 text-sm">
            Created by{" "}
            <a
              href="https://www.instagram.com/fathandmayang/?hl=en"
              target="_blank"
            >
              FM Production
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
