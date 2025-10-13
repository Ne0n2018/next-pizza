import { getUserSession } from "@/shared/lib/get-user-session";
import { UserRole } from "@prisma/client";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getUserSession();
  if (session?.role !== UserRole.ADMIN || !session) {
    return redirect("/not-auth");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Dashboard content</p>
    </div>
  );
}
