import { useState } from "react";
export function useSubmitStatus() {
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  return { submitStatus, setSubmitStatus };
}
