#!/bin/bash

set -e

cd "$(dirname "$0")/../.."

pnpm install --frozen-lockfile

cd apps/shell

pnpm build
