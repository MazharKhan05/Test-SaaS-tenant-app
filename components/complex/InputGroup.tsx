"use client";
import React, { useState } from "react";
import { Label } from "../Core/Label";
import { Input } from "../Core/Input";
import { InputGroupData } from "@/lib/types/websiteManagement/page/components/complex/data";

const InputGroup = ({ params }: { params: InputGroupData }) => {
  const [inputFieldText, setInputFieldText] = useState("");

  return (
    <div className="mb-6">
      <Label data={params.label} />
      <div className="rounded-lg border border-gray-300">
        <Input
          setInputFieldText={(e) => {
            setInputFieldText(e.target.value);
            params.input.value = inputFieldText;
          }}
          data={params.input}
        />
      </div>
    </div>
  );
};

export default InputGroup;
