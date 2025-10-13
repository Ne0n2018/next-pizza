import { Header } from "@/shared/components/shared/dashboard";

export const metadata = {
  title: "Dashboard",
  description: "About page",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
