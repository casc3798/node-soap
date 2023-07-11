const soap = require("soap");
const url = "http://www.dneonline.com/calculator.asmx?wsdl";

soap.createClient(url, function (err, client) {
  if (err) {
    console.error(err);
  } else {
    const args = { intA: "5", intB: 3 };
    client.Add(args, function (err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
      }
    });
  }
});
