# RemoteflagsNodejsClient.PublicApi

All URIs are relative to *https://api.remoteflags.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatus**](PublicApi.md#getStatus) | **GET** /status/owner/{ownerId}/flag/{flagId} | Get a flag status.



## getStatus

> Status getStatus(ownerId, flagId, opts)

Get a flag status.

Use this operation to get a flag status from remoteflags.

### Example

```javascript
import RemoteflagsNodejsClient from 'remoteflags-nodejs-client';
let defaultClient = RemoteflagsNodejsClient.ApiClient.instance;
// Configure API key authorization: RemoteFlagsAuthorizer
let RemoteFlagsAuthorizer = defaultClient.authentications['RemoteFlagsAuthorizer'];
RemoteFlagsAuthorizer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//RemoteFlagsAuthorizer.apiKeyPrefix = 'Token';

let apiInstance = new RemoteflagsNodejsClient.PublicApi();
let ownerId = "ownerId_example"; // String | OwnerID to fetch status for
let flagId = "flagId_example"; // String | FlagId to fetch status for
let opts = {
  'segment': "segment_example", // String | The segment to get status from. Required for multi-segment flags. For single segment flag skip this.
  'key': "key_example" // String | An identifier to be a key to associate the status with. This is used on flag which status you need to be consistent after the first random generated. For always random status behavior skip this.
};
apiInstance.getStatus(ownerId, flagId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| OwnerID to fetch status for | 
 **flagId** | **String**| FlagId to fetch status for | 
 **segment** | **String**| The segment to get status from. Required for multi-segment flags. For single segment flag skip this. | [optional] 
 **key** | **String**| An identifier to be a key to associate the status with. This is used on flag which status you need to be consistent after the first random generated. For always random status behavior skip this. | [optional] 

### Return type

[**Status**](Status.md)

### Authorization

[RemoteFlagsAuthorizer](../README.md#RemoteFlagsAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

