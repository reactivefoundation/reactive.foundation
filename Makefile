setup:
	npm install

serve:
	hugo server \
	--buildDrafts \
	--buildFuture \
	--disableFastRender

production-build:
	hugo \
		--minify

preview-build:
	hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--minify

docker-serve:
	docker run --rm -it -v $(PWD):/src -p 1313:1313 klakegg/hugo:latest-ext server --buildDrafts --buildFuture
