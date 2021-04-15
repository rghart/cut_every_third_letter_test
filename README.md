# Cut every third letter test
Test to cut every third letter from a string. 

Requests should be sent to the route `/test` and be in the format: `'{"string_to_cut": "test string"}'`

Example: `curl -X POST https://radiant-shore-54575.herokuapp.com/test --data '{"string_to_cut": "your test string here"}' -H 'Content-Type: application/json'`

Output: `{"return_string":"uesihe"}`
