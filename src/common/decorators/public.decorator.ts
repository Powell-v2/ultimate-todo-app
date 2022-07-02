import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_FIELD = 'IS_PUBLIC_FIELD'
export const Public = () => SetMetadata(IS_PUBLIC_FIELD, true)