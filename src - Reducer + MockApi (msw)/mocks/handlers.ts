import { http, HttpResponse } from "msw";
import { users } from "./data/users";
import { skills } from "./data/skills";

export const handlers = [
  http.get("/api/users", () => {
    return HttpResponse.json(users);
  }),

  http.get("/api/skills", () => {
    return HttpResponse.json(skills);
  }),
];