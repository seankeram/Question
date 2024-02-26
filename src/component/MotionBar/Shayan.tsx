import React from "react";

interface ShayanProps {
  weight: number;
  hight: number;
  eyesColor: "blue" | "brown" | "green";
}

export default function Shayan(props: ShayanProps) {
  const { weight, hight, eyesColor } = props;
  return (
    <div>
      {weight}kg,{hight}cm,{eyesColor}
    </div>
  );
}
