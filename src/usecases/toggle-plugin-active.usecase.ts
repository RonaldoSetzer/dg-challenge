import { Category } from "../domain/entities/category.entity";

export class TogglePluginActiveUseCase {
  constructor(
    private readonly category: Category,
    private readonly pluginId: string
  ) { }

  async execute(): Promise<Category> {
    const plugin = this.category?.plugins.find(
      (plugin) => plugin.id === this.pluginId
    );

    if (plugin) {
      plugin.toggleActive();
    }
      
    return this.category;
  }
}


