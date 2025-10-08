/* Write a JavaScript program to get an object containing the current URL parameters. */

const URL = "https://www.facebook.com";

function JS(url) {
  let part1 = url.split("://")[0];
  let part2 = url.split("://")[1];
  console.log(part1, part2);
  let protocol = part1;
  let domain = part2;
  let domainParts = part2.split("."); // split the domain manually
  let sub = domainParts[0];
  let urlName = domainParts[1];
  return { protocol, domain, urlName, sub };
}

console.log(JS(URL));
