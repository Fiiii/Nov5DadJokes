export function success(body, statusCode = 200) {
  return buildResponse(body, statusCode);
}

export function failure(body, statusCode = 500) {
  return buildResponse(body, statusCode);
}

function buildResponse(body, statusCode) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body)
  };
}
