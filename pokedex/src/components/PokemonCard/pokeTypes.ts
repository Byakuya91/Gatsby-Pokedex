export type PokemonCardProps = {
  pokemon: AllPokemonType
  index: number
}

export type AllPokemonType = {
  types: string[]
  image: string
  id: string
  name: string
}
