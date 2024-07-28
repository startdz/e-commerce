"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Button
      className="bg-primaries"
      radius="full"
      onPress={() => setCount(count + 1)}
    >
      Count is {count}
    </Button>
  );
};
