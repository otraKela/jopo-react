function obtainUserFromJwt (jwt) {
  const payloadSegment = jwt.split('.')[1];
  const payloadNotParsed = payloadSegment.replace('-', '+').replace('_', '/');
  const payloadParsed = JSON.parse(window.atob(payloadNotParsed));

  return  {
          userName: payloadParsed.userName, 
          userId: payloadParsed.userId
          };

}


export default obtainUserFromJwt;