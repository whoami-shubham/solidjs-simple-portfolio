import solid from "solid-start/vite";
import solidStatic from "solid-start-static";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/solidjs-simple-portfolio/",
  // insert your github project name between slashes above
  plugins: [solid({ adapter: solidStatic() })],
});
