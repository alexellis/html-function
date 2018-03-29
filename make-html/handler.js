"use strict"

module.exports = (event, context) => {
    let result = "<html><h2>Hi, from your function!</h2></html>"

    context
        .status(200)
        .headers({"Content-Type": "text/html"})
        .succeed(result);
}
