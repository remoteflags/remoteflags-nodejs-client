<br/>

![alt text](https://s3.eu-west-1.amazonaws.com/www.remoteflags.com/Header.png)

# remoteflags-nodejs-client
[![npm version](https://img.shields.io/npm/v/remoteflags-nodejs-client)](https://www.npmjs.com/package/remoteflags-nodejs-client)

[Remote Flags](remoteflags.com) nodejs sdk to integrate with Public API to fetch flag status.

## Installation
#### npm

Install it via:

```shell
npm install remoteflags-nodejs-client --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const remoteflagsClient = require('remoteflags-nodejs-client');

const defaultClient = remoteflagsClient.ApiClient.instance;
const authorizer = defaultClient.authentications['RemoteFlagsAuthorizer'];
authorizer.apiKey = "<YOUR_API_KEY>"

const api = new remoteflagsClient.PublicApi()
const ownerId = "<YOUR_OWENER_ID>"; // {String} OwnerID to fetch status for
const flagId = "<YOUR_FLAG_ID>"; // {String} FlagId to fetch status for

// optional parameters
const opts = {
  'segment': "status", // {String} The segment to get status from. Required for multi-segment flags. For single segment flag skip this.
  'key': "key_example" // {String} An identifier to be a key to associate the status with. This is used on flag which status you need to be consistent after the first random generated. For always random status behavior skip this.
};
const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('Remote Flags API called successfully. Returned flag status: ' + data.value);
  }
};
api.getStatus(ownerId, flagId, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.remoteflags.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RemoteflagsNodejsClient.PublicApi* | [**getStatus**](docs/PublicApi.md#getStatus) | **GET** /status/owner/{ownerId}/flag/{flagId} | Get a flag status.


## Documentation for Models

 - [RemoteflagsNodejsClient.Status](docs/Status.md)


## Documentation for Authorization



### RemoteFlagsAuthorizer


- **Type**: API key
- **API key parameter name**: authorizationToken
- **Location**: HTTP header

