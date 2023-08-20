export class Plugin {
  enabled: boolean = true;
  active: boolean = true;

  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
  ) { }

  public activate() {
    this.active = true;
  }

  public deactivate() {
    this.active = false;
  }

  public enable() {
    this.enabled = true;
  }

  public disable() {
    this.enabled = false;
  }

  public toggleActive() {
    this.active = !this.active;
  }

  public toggleEnabled() {
    this.enabled = !this.enabled;
  }
}


