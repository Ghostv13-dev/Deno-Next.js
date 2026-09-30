// @ts-check
import { module } from "@prisma/composer";
import tutorialWithNextService from "./service.mjs";

export default module("tutorial-with-next", ({ provision }) => {
  provision(tutorialWithNextService, { id: "tutorialwithnext" });
});
