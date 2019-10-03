$token = ((Invoke-WebRequest -Method POST http://localhost:3000/api/login -Body '{"username": "john", "password": "changeme"}').content | ConvertFrom-Json).access_token
(Invoke-WebRequest http://localhost:3000/api/me  -Headers @{Authorization = "Bearer $token" }).content
