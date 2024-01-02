import Image from "next/image";

export default function UserPage({ params }) {
  const id = params.id;

  return (
    <Image src={`/api/images/user/${id}`} alt="user" width={100} height={100} />
  );
}
