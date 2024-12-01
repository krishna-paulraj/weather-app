import { UserButton } from "@clerk/nextjs";
import { Switch } from "./ui/switch";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-2">
        <Input type="text" placeholder="Search City" />
        <Button className="rounded-full">
          <Search />
        </Button>
      </div>
      <div className="flex gap-3 mr-4 items-center">
        <Switch id="toggle" />
        <p className="text-muted-foreground mr-2">show in °F</p>
        <UserButton />
      </div>
    </div>
  );
}
