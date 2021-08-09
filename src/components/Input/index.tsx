import React from "react";

import { Container, Label, TextInput } from "./styles";

import InputModel from "../../models/components/InputProps";

const Input: React.FC<InputModel> = ({ label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput />
    </Container>
  );
}

export default Input;