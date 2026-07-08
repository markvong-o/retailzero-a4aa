FROM 753968715979.dkr.ecr.us-west-2.amazonaws.com/iddb-app-base:node-latest AS build
WORKDIR /app
USER root

RUN set -eu; n=5; i=0; \
    until timeout 120 apk add --no-cache python-3.14 build-base; do \
      i=$((i+1)); \
      if [ "$i" -ge "$n" ]; then echo "apk add failed after $n attempts"; exit 1; fi; \
      echo "apk add attempt $i failed, retrying in $((i*5))s..."; \
      sleep $((i*5)); \
    done

COPY --chown=nonroot:nonroot . /app/
RUN npm ci
RUN npm run build

FROM 753968715979.dkr.ecr.us-west-2.amazonaws.com/iddb-app-base:node-latest AS runtime
WORKDIR /app

COPY --from=build --chown=nonroot:nonroot /app/.next/standalone ./
COPY --from=build --chown=nonroot:nonroot /app/.next/static ./.next/static
COPY --from=build --chown=nonroot:nonroot /app/public ./public

ENV HOSTNAME=0.0.0.0
ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
