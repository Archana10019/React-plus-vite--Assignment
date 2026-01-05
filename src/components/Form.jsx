export default function Form() {
  return (
    <form className="max-w-md space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}
