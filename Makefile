.DEFAULT_GOAL := build
.PHONY: build

BIN = $(shell yarn bin)

test:
	@${BIN}/jest --env node
.PHONY: test

test-watch:
	@${BIN}/jest --env node --watch

build:
	@rm -rf lib
	@${BIN}/tsc
	@${BIN}/prettier "lib/**/*.[jt]s" --write --loglevel silent
	@cp {package.json,*.md} lib
	@rsync --archive --prune-empty-dirs --exclude '*.ts' --relative src/./ lib

publish: build
	@cd lib && npm publish --access public

publish-next: build
	@cd lib && npm publish --access public --tag next