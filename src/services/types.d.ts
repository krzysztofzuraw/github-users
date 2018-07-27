import services from "@src/services";

declare module "Types" {
  type Services = typeof services;
}
