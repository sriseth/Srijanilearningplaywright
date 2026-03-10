let envName = "staging";

switch(envName){

    case "dev" :
        console.log(`Environment: ${envName} Base URL: https://${envName}-api.testingacademy.com API Key: dev_key_xxxx-xxxx Timeout: 4000ms Description: dev`);
        break;

    case "staging" :
        console.log(`Environment: ${envName} Base URL: https://${envName}-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: Staging - Pre-production mirror`);
        break;

    case "qa" :
        console.log(`Environment: ${envName} Base URL: https://${envName}-api.testingacademy.com API Key: qa_key_xxxx-xxxx Timeout: 5000ms Description: qa`);
        break;

    case "prod" :
        console.log(`Environment: ${envName} Base URL: https://${envName}-api.testingacademy.com API Key: prod_key_xxxx-xxxx Timeout: 6000ms Description: prod`);
        break;

    default:
    console.log("invalid environment");




}
 