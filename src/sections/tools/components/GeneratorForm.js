import React, { useState } from "react";

export default function GeneratorForm() {
  const [startupType, setStartupType] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [numWords, setNumWords] = useState("");
  const [result, setResult] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    const res = await fetch("/api/lookup-startup-names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startupType,
        location,
        industry,
        description,
        numWords,
      }),
    });
    setIsGenerating(false);
    const data = await res.json();
    setResult(data.generaetedNames.trim());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jobDescription);
    setIsCopied(true);
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12 ">
        <div className="">
        <form onSubmit={(e) => handleSubmit(e)}>
             <div className="flex flex-col">
              <label className="sr-only" htmlFor="tone">
                Startup Types
              </label>

              <select
                value={startupType}
                onChange={(e) => setStartupType(e.target.value)}
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                name="startup_type"
                id="startup_type"
              >
                <option value="default">Select Startup Type</option>
                <option value="Formal">Formal</option>
                <option value="Cool">Cool</option>
                <option value="Sporty">Sporty</option>
                <option value="Biology">Biology</option>
                <option value="B2B">B2B</option>
                <option value="Consumer tech">Consumer tech</option>
                <option value="medtech">Medtech</option>
                <option value="Hardware">Hardware</option>
                <option value="Space">Space</option>
                <option value="Regtech">Regtech</option>
                <option value="FinTech">FinTech</option>
                <option value="Web3/crypto">Web3/crypto</option>
                <option value="Industrial">Industrial</option>
                <option value="Retail">Retail</option>
                <option value="Ecommerce">Ecommerce</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                placeholder="Location (Optional)"
                type="text"
                name="location"
                id="location"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="industry" className="sr-only">
                Industry
              </label>
              <input
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                placeholder="Industry (Optional)"
                type="text"
                name="industry"
                id="industry"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="keywords" className="sr-only">
                Description
              </label>
              <textarea
                rows={7}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                id="description"
                placeholder="Description of startup business"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="words" className="sr-only">
                Words (Optional)
              </label>
              <input
                value={numWords}
                onChange={(e) => setNumWords(e.target.value)}
                defaultValue ="100"
                type="number"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                placeholder="Number Of Words - Default 100 (Optional)"
                name="words"
                id="words"
              />
            </div>

            <button
              className={`bg-blue-600 w-full hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded
                ${
                  isGenerating || startupType === ""
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              type="submit"
              disabled={isGenerating || startupType === ""}
            >
              {isGenerating ? "Generating..." : "Generate 10 Startup Names"}
            </button>
          </form>
        </div>
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="output" className="sr-only">
              Output
            </label>
            <textarea
              rows={
                result === ""
                  ? 7
                  : result.split("\\n").length + 12
              }
              name="output"
              onChange={(e) => setResult(e.target.value)}
              value={result}
              disabled={result === ""}
              id="output"
              placeholder="Result"
              className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
            />
            <button
                onClick={handleCopy}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                disabled={result === ""}
            >
                {isCopied ? "Copied" : "Copy to Clipboard"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}