import { Category } from "../domain/entities/category.entity";

export class DisableAllPluginsUseCase {
  constructor(private categories: Category[]) {
    this.categories = [...categories]
  }

  async execute(): Promise<Category[]> {
    await Promise.all(
      this.categories.map(async (category) => {
        category.disableAllPlugins();
      })
    );
    return this.categories;
  }
}
