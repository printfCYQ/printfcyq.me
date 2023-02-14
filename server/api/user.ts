import type { User } from "~/types";

export default defineEventHandler(async () => {
  return $fetch<User>("https://api.github.com/users/printfCYQ");
});
