import Search from "./components/Search";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}
