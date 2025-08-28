import { Button } from "./ui/button";

export default function Home() {
  return (
    <section>
      <div className="container">
        <h1 className="text-3xl font-bold">Home</h1>

        <Button 
          variant="outline"
        >
          Default
        </Button>
      </div>
    </section>
  );
}