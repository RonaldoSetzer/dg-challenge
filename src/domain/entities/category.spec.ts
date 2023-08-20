import { Category } from './category.entity';
import { Plugin } from './plugin.entity';

describe('Category', () => {
  let category: Category;

  beforeEach(() => {
    category = new Category('1', 'Category', 'icon');
  });

  it('should create with default values', () => {
    expect(category.id).toBe('1');
    expect(category.title).toBe('Category');
    expect(category.icon).toBe('icon');
    expect(category).toBeTruthy();
    expect(category.plugins).toEqual([]);
  });

  describe('addPlugin', () => {
    it('should add plugin to plugins array', () => {
      const plugin = new Plugin('1', 'Plugin', 'description');
      category.addPlugin(plugin);
      expect(category.plugins).toEqual([plugin]);
    });

    it('should add plugin to plugins array with active true', () => {
      const plugin = new Plugin('1', 'Plugin', 'description');
      category.addPlugin(plugin, true);
      expect(category.plugins).toEqual([plugin]);
    });

    it('should add plugin to plugins array with active false', () => {
      const plugin = new Plugin('1', 'Plugin', 'description');
      category.addPlugin(plugin as any, false);
      expect(category.plugins).toEqual([plugin]);
    });

    it('should add plugin to plugins array with enabled true', () => {
      const plugin = new Plugin('1', 'Plugin', 'description');
      category.addPlugin(plugin as any, false, true);
      expect(category.plugins).toEqual([plugin]);
    });

    it('should add plugin to plugins array with enabled false', () => {
      const plugin = new Plugin('1', 'Plugin', 'description');
      category.addPlugin(plugin as any, false, false);
      expect(category.plugins).toEqual([plugin]);
    });
  });

  describe('removePlugin', () => {
    it('should remove plugin from plugins array', () => {
      const plugin = new Plugin('1', 'Plugin', 'description');
      category.addPlugin(plugin);
      category.removePlugin(plugin);
      expect(category.plugins).toEqual([]);
    });
  });

  describe('disablePlugin', () => {
    it('should disable plugin', () => {
      const plugin = new Plugin('1', 'Plugin', 'description');
      category.addPlugin(plugin);
      category.disablePlugin(plugin);
      expect(category.plugins[0].enabled).toBe(false);
    });
  });

  describe('enablePlugin', () => {
    it('should enable plugin', () => {
      const plugin = new Plugin('1', 'Plugin', 'description');
      category.addPlugin(plugin);
      category.disablePlugin(plugin);
      category.enablePlugin(plugin);
      expect(category.plugins[0].enabled).toBe(true);
    });
  });

  describe('activatePlugin', () => {
    it('should activate plugin', () => {
      const plugin = new Plugin('1', 'Plugin', 'description');
      category.addPlugin(plugin);
      category.deactivatePlugin(plugin);
      category.activatePlugin(plugin);
      expect(category.plugins[0].active).toBe(true);
    });
  });

  describe('activeteAllPlugins', () => {
    it('should activate all plugins', () => {
      const plugin1 = new Plugin('1', 'Plugin', 'description');
      const plugin2 = new Plugin('2', 'Plugin', 'description');
      category.addPlugin(plugin1);
      category.addPlugin(plugin2);
      category.deactivateAllPlugins();
      category.activateAllPlugins();
      expect(category.plugins[0].active).toBe(true);
      expect(category.plugins[1].active).toBe(true);
    });
  });

  describe('deactivatePlugin', () => {
    it('should deactivate plugin', () => {
      const plugin = new Plugin('1', 'Plugin', 'description');
      category.addPlugin(plugin);
      category.activatePlugin(plugin);
      category.deactivatePlugin(plugin);
      expect(category.plugins[0].active).toBe(false);
    });
  });

  describe('deactivateAllPlugins', () => {
    it('should deactivate all plugins', () => {
      const plugin1 = new Plugin('1', 'Plugin', 'description');
      const plugin2 = new Plugin('2', 'Plugin', 'description');
      category.addPlugin(plugin1);
      category.addPlugin(plugin2);
      category.activateAllPlugins();
      category.deactivateAllPlugins();
      expect(category.plugins[0].active).toBe(false);
      expect(category.plugins[1].active).toBe(false);
    });
  });

  describe('getPluginById', () => {
    it('should return plugin by id', () => {
      const plugin = new Plugin('1', 'Plugin', 'description');
      category.addPlugin(plugin);
      expect(category.getPluginById('1')).toEqual(plugin);
    });
  });
});
