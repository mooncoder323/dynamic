import GeneratorForm from "./components/GeneratorForm";

const GeneratorPage = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-4xl md:text-6xl font-bold">
            Startup Business Name Generator
          </h1>
          <p className="mt-3 text-2xl">
            Generate 10 names for your next Big
            <span className="text-2xl font-bold text-blue-600">
              {" "}
              Startup Business{" "}
            </span>
            in Seconds
          </p>
        </div>
        <GeneratorForm />
    </div>
  );
};

export default GeneratorPage;
