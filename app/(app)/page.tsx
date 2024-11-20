import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function AppPage() {
  return (
    <div className="h-full">
      <UserButton />
      <ModeToggle />

      <h1 className="text-3xl">Weather App</h1>
    </div>
  );
}
