export default function Table() {
  return (
    <table className="w-full border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Role</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4].map((item, index) => (
          <tr
            key={index}
            className="even:bg-gray-100 hover:bg-gray-200"
          >
            <td className="border p-2">{item}</td>
            <td className="border p-2">User {item}</td>
            <td className="border p-2">Admin</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
