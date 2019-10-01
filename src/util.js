import aws4 from "aws4";

export const getSigningKey = (apiPath, apiMethod, apiBody, apiHeaders) => {
  apiBody = !apiBody ? "" : apiBody;

  let opts = {
    host: "jadyy0ru89.execute-api.us-east-2.amazonaws.com",
    region: "us-east-2",
    service: "execute-api",
    path: apiPath,
    method: apiMethod,
    body: apiBody
  };

  if (apiHeaders) {
    opts["headers"] = apiHeaders;
  }

  aws4.sign(opts, {
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_KEY
  });

  return [apiPath, opts];
};
