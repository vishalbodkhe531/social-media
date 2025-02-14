"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md w-full space-y-6">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-24 h-24 text-destructive" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">
          404 - Page Not Found
        </h1>
        <p className="text-muted-foreground">
          Oops! The page you are looking for seems to have wandered off into the
          digital wilderness.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/" passHref>
            <Button variant="default">Return to Home</Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
