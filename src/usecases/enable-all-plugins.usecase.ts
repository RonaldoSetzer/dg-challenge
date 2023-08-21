import { Category } from "../domain/entities/category.entity";

export class EnableAllPluginsUseCase {
  constructor(private categories: Category[]) {
    this.categories = [...categories]
  }

  async execute(): Promise<Category[]> {
    await Promise.all(
      this.categories.map(async (category) => {
        category.enableAllPlugins();
      })
    );
    return this.categories;
  }
}

