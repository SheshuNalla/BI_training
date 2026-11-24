export type Role = "admin" | "manager" | "employee";

export type Permission =
  | "employee:view"
  | "employee:create"
  | "employee:edit"
  | "employee:delete"
  | "user:manage";

export const rolePermissions: Record<Role, Permission[]> = {
  admin: [
    "employee:view",
    "employee:create",
    "employee:edit",
    "employee:delete",
    "user:manage",
  ],

  manager: [
    "employee:view",
    "employee:create",
    "employee:edit",
  ],

  employee: [
    "employee:view",
  ],
};