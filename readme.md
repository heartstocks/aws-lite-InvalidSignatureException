
Minimal Architect app to reproduce and investigate https://github.com/architect/aws-lite/issues/127.


## Notes to self

Deploy: `AWS_REGION=eu-central-1 pkgx aws-vault exec h9s-playground --no-session -- npx arc deploy`

Provoke error: `pkgx k6 --vus 200 --iterations 200 --env TARGET="https://….amazonaws.com" run k6-provoke-exception.js`
