import { Plugin } from "../domain/entities/plugin.entity";
import { Category } from "../domain/entities/category.entity";
import { TogglePluginActiveUseCase } from "./toggle-plugin-active.usecase";

describe('DisableAllPluginsUseCase', () => {
  let togglePluginActiveUseCase: TogglePluginActiveUseCase;
  let category: Category;

  beforeEach(() => {
    const category1 = new Category('1', 'Category', 'icon');
    category1.addPlugin(new Plugin('1', 'Plugin 1', 'icon'), false);
    category1.addPlugin(new Plugin('2', 'Plugin 2', 'icon'), true);
    category1.enableAllPlugins();

    togglePluginActiveUseCase = new TogglePluginActiveUseCase(category, '2');
  });

  it('should return the category', async () => {
    const result = await togglePluginActiveUseCase.execute();

    expect(result).toEqual(category);
  });

  it('should toggle the plugin active', async () => {
    const result = await togglePluginActiveUseCase.execute();

    expect(result?.plugins[1].enabled).toBeFalsy();
  });

  it('should not toggle the plugin active', async () => {
    const togglePluginActiveUseCase = new TogglePluginActiveUseCase(category, '3');
    const result = await togglePluginActiveUseCase.execute();

    expect(result).toEqual(category);
  });
});


