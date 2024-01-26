export type PokemonCardProps = {
  pokemon: AllPokemonType
  index?: number
}

export type AllPokemonType = {
  types: PokemonTypes[]
  image: string
  id: string
  name: string
}

export type PokemonTypes =
  | "water"
  | "fire"
  | "grass"
  | "bug"
  | "normal"
  | "poison"
  | "electric"
  | "ground"
  | "fairy"
  | "fighting"
  | "psychic"
  | "rock"
  | "ghost"
  | "ice"
  | "dragon"
  | "dark"
  | "steel"
  | "flying"
