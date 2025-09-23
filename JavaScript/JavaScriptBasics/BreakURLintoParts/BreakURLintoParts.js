/* Write a JavaScript program to break an URL address and put its parts into an array.  
Note: url structure : ://.org[/] and there may be no part in the address. */

function breakUrl(url_add) {
  let data = url_add.split("://");
  let protocol = data[0];

  data = data[1].split(".com");
  let domain = data[0];

  // Splitting the address after .com to extract the path if available
  data = data[1].split("/");

  // Checking if a path exists and returning the relevant parts
  if (data[1]) {
    return [protocol, domain, data[1]];
  }

  // Returning protocol and domain if path doesn't exist
  return [protocol, domain];
}
