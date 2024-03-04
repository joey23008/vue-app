import type { StringLiteral } from "typescript"

export type User = {
    user: {
        name: string,
        email: string,
    },
    authorisation: {
        token: string,
    }
}