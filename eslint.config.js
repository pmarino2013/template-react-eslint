import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  {
    // Ignorar carpetas que no queremos evaluar
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Reglas personalizadas para alumnos
      "react/react-in-jsx-scope": "off", // No necesario en React 17+
      "react/prop-types": "off", // Para no agobiar con validación de tipos
      "no-unused-vars": "error", // Avisa si hay variables sin usar
      "react-hooks/rules-of-hooks": "error", // Error crítico si rompen las reglas de hooks
      "react-hooks/exhaustive-deps": "warn", // Avisa si falta algo en el array de dependencias
      "no-console": "error", // Para que limpien los console.log
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
