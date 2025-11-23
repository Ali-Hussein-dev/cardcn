import { atomWithStorage } from "jotai/utils";

export type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

// Package manager preference atom with localStorage persistence
export const packageManagerAtom = atomWithStorage<PackageManager>(
	"package-manager-preference",
	"npm",
);

