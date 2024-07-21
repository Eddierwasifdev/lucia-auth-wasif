import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Link href="/authenticate">
        <Button>Sign asdsa up</Button>
      </Link>
    </div>
  );
}
