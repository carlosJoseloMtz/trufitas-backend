
curl -k \
  --verbose -H "Content-type:application/json" \
  -X POST \
  -H 'Authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluMiIsImdyb3VwcyI6WyJhZG1pbiJdLCJpYXQiOjE2MDQ1NDY3NTYsImV4cCI6MTYwNDcxOTU1Nn0.36vsUpeViMyngEM3S2iQlRpaguJYSQwk8O8HQ9mfrX0' \
  http://localhost:3030/v1/admin/products \
  -d @payloads/new-product.json
