import { PluginsDto, TabDataDto } from "../domain/dtos/api-payload.dto"
import { Category } from "../domain/entities/category.entity"
import { CategoryFactory } from "../domain/factories/category.factory"

export class SeedByApiUseCase {
  constructor(
    private readonly tabs: string[],
    private readonly tabdata: TabDataDto,
    private readonly plugins: PluginsDto,
  ) { }

  async execute(): Promise<Category[]> {
    const categories: Category[] = [];
    this.tabs.forEach((tab) => {
      const category = CategoryFactory.create(tab, this.tabdata, this.plugins)
      if (category) {
        categories.push(category)
      }
    })

    return categories;
  }
}
