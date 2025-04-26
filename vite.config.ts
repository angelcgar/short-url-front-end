import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { BACKEND_URL } from "./src/const";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": BACKEND_URL, // Proxy para el backend
		},
	},
});
