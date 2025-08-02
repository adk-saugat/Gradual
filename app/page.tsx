import { FaGoogle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-6">
          <p className="flex flex-col gap-2">
            <h1 className="text-7xl text-center font-bold text-gray-700">
              Gradual
            </h1>
            <h3 className="text-center text-zinc-500">
              Track your academic growth!
            </h3>
          </p>
          <form className="flex justify-center" action="">
            <button className="bg-blue-500 text-white py-3 px-8 rounded-xl flex items-center cursor-pointer shadow-xs hover:bg-blue-600 transition-colors">
              <FaGoogle className="mr-2" />
              <span>Login With Google</span>
            </button>
          </form>
        </div>
        <p className="flex flex-col gap-2 text-zinc-500">
          <span>✓ Log your progress</span>
          <span>✓ Track deadlines</span>
          <span>✓ Stay consistent</span>
          <span>✓ Reflect and improve</span>
        </p>
        <footer>
          <p className="text-zinc-500 text-sm mt-10">
            © 2025 Gradual by Saugat Adhikari
          </p>
        </footer>
      </section>
    </div>
  );
}
