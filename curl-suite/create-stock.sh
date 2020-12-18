
curl -k \
  --verbose -H "Content-type:application/json" \
  -X POST \
  http://localhost:3030/v1/admin/stocks \
  -d @payloads/new-stocklevel.json
