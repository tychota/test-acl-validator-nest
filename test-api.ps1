(Invoke-WebRequest http://localhost:3000/api/me  -Headers @{Authorization = "Bearer $token" }).content
(Invoke-WebRequest http://localhost:3000/api/profile/1  -Headers @{Authorization = "Bearer $token" }).content
(Invoke-WebRequest http://localhost:3000/api/profile/2  -Headers @{Authorization = "Bearer $token" }).content
(Invoke-WebRequest http://localhost:3000/api/profile/3  -Headers @{Authorization = "Bearer $token" }).content


$token = ((Invoke-WebRequest -Method POST http://localhost:3000/api/login -Body '{"username": "john", "password": "changeme"}' -ContentType 'application/json').content | ConvertFrom-Json).access_token
(Invoke-WebRequest http://localhost:3000/api/me  -Headers @{Authorization = "Bearer $token" }).content
(Invoke-WebRequest http://localhost:3000/api/profile/1  -Headers @{Authorization = "Bearer $token" }).content
(Invoke-WebRequest http://localhost:3000/api/profile/2  -Headers @{Authorization = "Bearer $token" }).content
(Invoke-WebRequest http://localhost:3000/api/profile/3  -Headers @{Authorization = "Bearer $token" }).content

$token = ((Invoke-WebRequest -Method POST http://localhost:3000/api/login -Body '{"username": "chris", "password": "secret"}' -ContentType 'application/json').content | ConvertFrom-Json).access_token
(Invoke-WebRequest http://localhost:3000/api/me  -Headers @{Authorization = "Bearer $token" }).content
(Invoke-WebRequest http://localhost:3000/api/profile/1  -Headers @{Authorization = "Bearer $token" }).content
(Invoke-WebRequest http://localhost:3000/api/profile/2  -Headers @{Authorization = "Bearer $token" }).content
(Invoke-WebRequest http://localhost:3000/api/profile/3  -Headers @{Authorization = "Bearer $token" }).content