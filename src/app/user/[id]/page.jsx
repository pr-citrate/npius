import Image from "next/image";
import { notFound } from "next/navigation";

export default async function UserPage({ params }) {
  const fetchedUser = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://npius.dev"
    }api/user/${params.id}`,
    {
      cache: "force-cache",
    }
  ).then((res) => res.json());

  if (!fetchedUser) {
    return notFound();
  }

  const { id, description, infinite, ...user } = fetchedUser;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-12 bg-sky-50">
      <h1 className="mb-5 text-3xl sm:text-5xl">{user.name}</h1>
      <div className="flex flex-wrap items-center justify-center max-w-2xl p-5 m-4 overflow-hidden bg-sky-100 rounded-3xl">
        <Image
          src={`/api/images/user/${id}`}
          alt="user"
          width={300}
          height={300}
          className="max-w-[50%] min-w-[250px] rounded-md"
        />
        <div className="flex flex-col items-center max-w-[50%] min-w-[250px] justify-evenly p-4">
          {description && <p className="p-4 text-center">{description}</p>}
          <table className="p-2 m-4 overflow-hidden rounded-md">
            <tbody>
              {Object.entries(user).map(([key, value]) => (
                <tr
                  key={key}
                  className="bg-blue-100 border-b border-blue-200 last:border-b-0"
                >
                  <th className="px-4 py-1 whitespace-nowrap">{key}</th>
                  <td className="px-4 py-1 whitespace-nowrap">
                    {String(value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
