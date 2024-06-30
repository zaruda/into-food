export enum IntoleranceKey {
  Lactose,
  Fructose,
  Sorbitol,
  Sucrose,
  Gluten,
  Casein,
  SoyProtein,
  EggProtein,
  Histamine,
  Salicylate,
  Tyramine,
  MSG,
  Fructans,
  Galactans,
  Polyols,
  Caffeine,
  Alcohol,
  Yeast,
  RedMeat,
  Shellfish,
  Nightshade,
}

type IntoleranceCreateDto = {
  key: IntoleranceKey;
  name: string;
  category: string;
  description: string | null;
  allergens: string[];
};

export class Intolerance {
  constructor(
    public key: IntoleranceKey,
    public name: string,
    public category: string,
    public description: string | null,
    public allergens: string[]
  ) {}

  static create({
    key,
    name,
    category,
    description,
    allergens,
  }: IntoleranceCreateDto) {
    return new Intolerance(key, name, category, description, allergens);
  }
}
