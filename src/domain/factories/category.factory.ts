import { PluginsDto, TabDataDto } from "../dtos/api-payload.dto";
import { Category } from "../entities/category.entity";
import { Plugin } from "../entities/plugin.entity";

export class CategoryFactory {
  public static create(
    categoryId: string,
    categoriesStoreDto: TabDataDto | null,
    puglinsStoreDto: PluginsDto | null): Category | null {

    if (!categoriesStoreDto || !puglinsStoreDto) return null;

    const categoryDto = categoriesStoreDto[categoryId];

    if (!categoryDto) return null;

    const category = new Category(
      categoryId,
      categoryDto.title,
      categoryDto.icon,
    )
    categoryDto.active.forEach((pluginId) => {
      const pluginDto = puglinsStoreDto[pluginId];
      if (!pluginDto) return;
      const plugin = new Plugin(
        pluginId,
        pluginDto.title,
        pluginDto.description,
      );
      const isPluginInactived = categoryDto.disabled.includes(pluginId);
      category.addPlugin(plugin, true, !isPluginInactived);
    });
    categoryDto.inactive.forEach((pluginId) => {
      const pluginDto = puglinsStoreDto[pluginId];
      if (!pluginDto) return;
      const plugin = new Plugin(
        pluginId,
        pluginDto.title,
        pluginDto.description,
      );
      const isPluginInactived = categoryDto.disabled.includes(pluginId);
      category.addPlugin(plugin, false, !isPluginInactived);
    });
    categoryDto.disabled.forEach((pluginId) => {
      const pluginDto = puglinsStoreDto[pluginId];
      if (!pluginDto) return;
      const plugin = new Plugin(
        pluginId,
        pluginDto.title,
        pluginDto.description,
      );
      category.addPlugin(plugin, true, false);
    });

    return category;
  }
}
