let nock = require('nock');

module.exports.testInfo = {"Upper file empty another 汉字":"Upper file empty another 汉字156599444586602856"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/1share-with-dash156599443605003202/dir156599443605100762/Upper%20file%20empty%20another%20%E6%B1%89%E5%AD%97156599444586602856')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 16 Aug 2019 22:27:26 GMT',
  'ETag',
  '"0x8D72298EA861E0F"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '9d71c933-801a-0016-3881-54bb0f000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 16 Aug 2019 22:27:25 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/1share-with-dash156599443605003202/dir156599443605100762/Upper%20file%20empty%20another%20%E6%B1%89%E5%AD%97156599444586602856')
  .reply(200, "", [ 'Content-Length',
  '10',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Fri, 16 Aug 2019 22:27:26 GMT',
  'ETag',
  '"0x8D72298EA861E0F"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '7d7fc2fb-b01a-003c-6181-54ce4a000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Fri, 16 Aug 2019 22:27:26 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/1share-with-dash156599443605003202/dir156599443605100762')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"1share-with-dash156599443605003202\" DirectoryPath=\"dir156599443605100762\"><Prefix>Upper file empty another 汉字156599444586602856</Prefix><Entries><File><Name>Upper file empty another 汉字156599444586602856</Name><Properties><Content-Length>10</Content-Length></Properties></File></Entries><NextMarker /></EnumerationResults>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '734d66ce-f01a-00b3-5f81-548016000000',
  'x-ms-version',
  '2018-11-09',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Fri, 16 Aug 2019 22:27:26 GMT',
  'Connection',
  'close' ]);

