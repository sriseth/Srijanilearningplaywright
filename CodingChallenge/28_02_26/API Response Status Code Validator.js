let statsCode = 67676;

switch (statsCode){
    case 200:
    console.log("Status Code : " , statsCode + " Result : PASS -\nOK: Request successful" );
    break;
case 201:
    console.log("Status Code : " , statsCode + " Result : PASS - Created: \nResource created successfully");
    break;
case 301:
    console.log("Status Code : " , statsCode + " Result : WARNING -\nMoved Permanently: URL has changed");
    break;
case 400:
    console.log("Status Code : " , statsCode + " Result : FAIL - \n Bad Request: Check request payload");
    break;
case 401:
    console.log("Status Code : " , statsCode + " Result : FAIL- \nUnauthorized: Check auth token");
    break;
case 403:
    console.log("Status Code : " , statsCode + " Result : FAIL -\nForbidden: Insufficient permissions")
    break;
case 404:
    console.log("Status Code : " , statsCode + " Result : FAIL - \nNot Found: Check endpoint URL");
    break;
case 500:
    console.log("Status Code : " , statsCode + " Result : FAIL - \nInternal Server Error: Backend issue");
    break;
    default:
        console.log("Status Code : " , statsCode + " Result : Unknown- \nUnhandled status code");
}