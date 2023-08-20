import { Plugin } from './plugin.entity';

export class Category {
  readonly plugins: Plugin[] = [];

  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly icon: string,
  ) { }

  public addPlugin(plugin: Plugin, active?: boolean, enabled?: boolean) {
    enabled? plugin.enable() : plugin.disable();
    active ? plugin.activate() : plugin.deactivate();
    this.plugins.push(plugin);
  }

  public removePlugin(plugin: Plugin) {
    const index = this.plugins.indexOf(plugin);
    this.plugins.splice(index, 1);
  }

  public disablePlugin(plugin: Plugin) {
    this.plugins.find((p) => p.id === plugin.id)?.disable();
  }

  public enablePlugin(plugin: Plugin) {
    this.plugins.find((p) => p.id === plugin.id)?.enable();
  }

  public activatePlugin(plugin: Plugin) {
    this.plugins.find((p) => p.id === plugin.id)?.activate();
  }

  public activateAllPlugins() {
    this.plugins.forEach((p) => p.activate());
  }

  public deactivatePlugin(plugin: Plugin) {
    this.plugins.find((p) => p.id === plugin.id)?.deactivate();
  }

  public deactivateAllPlugins() {
    this.plugins.forEach((p) => p.deactivate());
  }

  public getPluginById(id: string) {
    return this.plugins.find((p) => p.id === id);
  }
}

