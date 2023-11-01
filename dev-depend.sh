#!/bin/bash

dependencies=(
    "@types/node"
    "@types/react"
    "@types/react-dom"
    "@types/react-router"
    "@types/react-router-dom"
    "@typescript-eslint/eslint-plugin"
    "@typescript-eslint/parser"
    "@vitejs/plugin-react-swc"
    "eslint"
    "eslint-config-prettier"
    "eslint-config-standard-with-typescript"
    "eslint-import-resolver-typescript"
    "eslint-plugin-import"
    "eslint-plugin-n"
    "eslint-plugin-prettier"
    "eslint-plugin-promise"
    "eslint-plugin-react"
    "eslint-plugin-react-hooks"
    "eslint-plugin-unused-imports"
    "prettier"
    "typescript"
    "vite"
    "vite-plugin-checker"
    "vite-tsconfig-paths"
)

for dependency in "${dependencies[@]}"
do
    npm i --save-dev $dependency
done