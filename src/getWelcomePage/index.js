const fs = require('fs');

const epsagon = require('@epsagon/epsagon');

epsagon.init({
    token: '71f4394d-5014-471d-b815-3489bd180ece',
    appName: 'test-tobias-1',
    metadataOnly: false,
});

exports.handler = epsagon.lambdaWrapper(async event => {
  // Log http request
  console.log(event);

  const responseBody = fs.readFileSync('./welcome.html', 'utf8');
  // Build an HTTP response.
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: responseBody
  };

  return response;
});