curl -k \
  --verbose -H "Content-type:application/json" \
  http://localhost:3030/v1/admin/users \
  -d @payloads/registration-payload.json
