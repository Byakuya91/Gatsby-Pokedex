import React from "react"
import { pokemonTypeOptions } from "./helper"
import { Container, Option, Select } from "./styles"

const Dropdown = ({ setType }) => {
  return (
    <Container>
      <Select onChange={e => setType(e.target.value)}>
        {pokemonTypeOptions.map(type => (
          <Option key={type.id} value={type.value}>
            {type.name}
          </Option>
        ))}
      </Select>
    </Container>
  )
}

export default Dropdown
