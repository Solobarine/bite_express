declare module "boxicons" {
  export interface IconOptions {
    size?: string;
    color?: string;
    type?: string;
  }

  export function renderIcon(name: string, options?: IconOptions): HTMLElement;
}
