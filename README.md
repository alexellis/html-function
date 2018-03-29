# html-function

An OpenFaaS function that returns HTML

## Try it out:

* Pull the templates

```
# faas template pull https://github.com/openfaas-incubator/node8-express-template
```

* Edit the template

The template is set to build on ARMHF/Raspberry Pi so if you're on a PC change that by updating the stack.yml file:

```
  template: node8-express
```

* Edit the Docker Hub account

Edit stack.yml and change alexellis2/ to your own account

* Build/deploy/invoke

```
# faas build \
 && faas push \
 && faas deploy
```

You can now open the function in a web-browser.

![](https://pbs.twimg.com/media/DZdx-MXW0AAvw9t.jpg)

* Customize the example

Edit the handler.js function and build/push/deploy the function again.
