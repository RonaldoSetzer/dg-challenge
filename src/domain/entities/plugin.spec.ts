import { Plugin } from './plugin.entity';

describe('Plugin', () => {
  let plugin: Plugin;

  beforeEach(() => {
    plugin = new Plugin(
      "id",
      "title",
      "description",
    );
  });

  it('should create with default values', () => {
    expect(plugin).toBeTruthy();
    expect(plugin.id).toEqual("id");
    expect(plugin.title).toEqual("title");
    expect(plugin.description).toEqual("description");
    expect(plugin.enabled).toEqual(true);
    expect(plugin.active).toEqual(true);
  });

  it('should activate', () => {
    plugin.deactivate();
    expect(plugin.active).toEqual(false);
    plugin.activate();
    expect(plugin.active).toEqual(true);
  });

  it('should deactivate', () => {
    plugin.deactivate();
    expect(plugin.active).toEqual(false);
  });

  it('should enable', () => {
    plugin.disable();
    expect(plugin.enabled).toEqual(false);
    plugin.enable();
    expect(plugin.enabled).toEqual(true);
  });

  it('should disable', () => {
    plugin.disable();
    expect(plugin.enabled).toEqual(false);
  });

  it('should toggle active', () => {
    plugin.toggleActive();
    expect(plugin.active).toEqual(false);
    plugin.toggleActive();
    expect(plugin.active).toEqual(true);
  });

  it('should toggle enabled', () => {
    plugin.toggleEnabled();
    expect(plugin.enabled).toEqual(false);
    plugin.toggleEnabled();
    expect(plugin.enabled).toEqual(true);
  });
});

