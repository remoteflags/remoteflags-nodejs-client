# RemoteflagsNodejsClient.PublicApi

All URIs are relative to *https://api.remoteflags.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devToggleIdOptions**](PublicApi.md#devToggleIdOptions) | **OPTIONS** /dev-toggle/{id} | 
[**get1ClickStatus**](PublicApi.md#get1ClickStatus) | **GET** /dev-toggle/{id} | Get a flag status for 1 click toggle.
[**getFlagUsage**](PublicApi.md#getFlagUsage) | **GET** /usage/owner/{ownerId}/flag/{flagId} | Get a flag usage data.
[**getOwnerUsage**](PublicApi.md#getOwnerUsage) | **GET** /usage/owner/{ownerId} | Get usage data for an owner.
[**getStatus**](PublicApi.md#getStatus) | **GET** /status/owner/{ownerId}/flag/{flagId} | Get a flag status.
[**statusOwnerOwnerIdFlagFlagIdOptions**](PublicApi.md#statusOwnerOwnerIdFlagFlagIdOptions) | **OPTIONS** /status/owner/{ownerId}/flag/{flagId} | 
[**usageOwnerOwnerIdFlagFlagIdOptions**](PublicApi.md#usageOwnerOwnerIdFlagFlagIdOptions) | **OPTIONS** /usage/owner/{ownerId}/flag/{flagId} | 
[**usageOwnerOwnerIdOptions**](PublicApi.md#usageOwnerOwnerIdOptions) | **OPTIONS** /usage/owner/{ownerId} | 



## devToggleIdOptions

> Object devToggleIdOptions(id)



### Example

```javascript
import RemoteflagsNodejsClient from 'remoteflags-nodejs-client';

let apiInstance = new RemoteflagsNodejsClient.PublicApi();
let id = "id_example"; // String | 
apiInstance.devToggleIdOptions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get1ClickStatus

> Status get1ClickStatus(id)

Get a flag status for 1 click toggle.

Use this operation to get a flag status from remoteflags for 1 click toggle.

### Example

```javascript
import RemoteflagsNodejsClient from 'remoteflags-nodejs-client';

let apiInstance = new RemoteflagsNodejsClient.PublicApi();
let id = "id_example"; // String | Id to fetch status for
apiInstance.get1ClickStatus(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id to fetch status for | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html, application/json


## getFlagUsage

> Usage getFlagUsage(ownerId, flagId, opts)

Get a flag usage data.

Use this operation to get flag usage data from remoteflags.

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
let ownerId = "ownerId_example"; // String | OwnerID to fetch usage for
let flagId = "flagId_example"; // String | FlagId to fetch usage for
let opts = {
  'from': '2022-03-01T15:01:01Z', // String | Get usage data starting from this timestamp. If skipped, will default to 30 days ago.
  'to': '2022-03-15T15:01:01Z' // String | Get usage data ending on this timestamp. If skipped, will default to current date.
};
apiInstance.getFlagUsage(ownerId, flagId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| OwnerID to fetch usage for | 
 **flagId** | **String**| FlagId to fetch usage for | 
 **from** | **String**| Get usage data starting from this timestamp. If skipped, will default to 30 days ago. | [optional] 
 **to** | **String**| Get usage data ending on this timestamp. If skipped, will default to current date. | [optional] 

### Return type

[**Usage**](Usage.md)

### Authorization

[RemoteFlagsAuthorizer](../README.md#RemoteFlagsAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html, application/json


## getOwnerUsage

> Usage getOwnerUsage(ownerId, opts)

Get usage data for an owner.

Use this operation to get owner usage data from remoteflags.

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
let ownerId = "ownerId_example"; // String | OwnerID to fetch usage for
let opts = {
  'from': '2022-03-01T15:01:01Z', // String | Get usage data starting from this timestamp. If skipped, will default to 30 days ago.
  'to': '2022-03-15T15:01:01Z' // String | Get usage data ending on this timestamp. If skipped, will default to current date.
};
apiInstance.getOwnerUsage(ownerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| OwnerID to fetch usage for | 
 **from** | **String**| Get usage data starting from this timestamp. If skipped, will default to 30 days ago. | [optional] 
 **to** | **String**| Get usage data ending on this timestamp. If skipped, will default to current date. | [optional] 

### Return type

[**Usage**](Usage.md)

### Authorization

[RemoteFlagsAuthorizer](../README.md#RemoteFlagsAuthorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html, application/json


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
apiInstance.getStatus(ownerId, flagId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
- **Accept**: text/html, application/json


## statusOwnerOwnerIdFlagFlagIdOptions

> Object statusOwnerOwnerIdFlagFlagIdOptions(ownerId, flagId)



### Example

```javascript
import RemoteflagsNodejsClient from 'remoteflags-nodejs-client';

let apiInstance = new RemoteflagsNodejsClient.PublicApi();
let ownerId = "ownerId_example"; // String | 
let flagId = "flagId_example"; // String | 
apiInstance.statusOwnerOwnerIdFlagFlagIdOptions(ownerId, flagId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**|  | 
 **flagId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usageOwnerOwnerIdFlagFlagIdOptions

> Object usageOwnerOwnerIdFlagFlagIdOptions(ownerId, flagId)



### Example

```javascript
import RemoteflagsNodejsClient from 'remoteflags-nodejs-client';

let apiInstance = new RemoteflagsNodejsClient.PublicApi();
let ownerId = "ownerId_example"; // String | 
let flagId = "flagId_example"; // String | 
apiInstance.usageOwnerOwnerIdFlagFlagIdOptions(ownerId, flagId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**|  | 
 **flagId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usageOwnerOwnerIdOptions

> Object usageOwnerOwnerIdOptions(ownerId)



### Example

```javascript
import RemoteflagsNodejsClient from 'remoteflags-nodejs-client';

let apiInstance = new RemoteflagsNodejsClient.PublicApi();
let ownerId = "ownerId_example"; // String | 
apiInstance.usageOwnerOwnerIdOptions(ownerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

