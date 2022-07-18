import { SetMetadata } from "@nestjs/common"
import { ERole } from "src/users/entities/user.entity";

export const ROLES_KEY = "ROLES"
export const Roles = (...roles: ERole[]) => SetMetadata(ROLES_KEY, roles);
