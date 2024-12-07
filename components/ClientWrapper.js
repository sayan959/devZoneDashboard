// components/ClientWrapper.js
"use client"; // Marking this file as a client-side component
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ClientWrapper = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient()); // Create QueryClient on the client side

  useEffect(() => {
    // Optional: Initialize client-side only logic if necessary
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ClientWrapper;
