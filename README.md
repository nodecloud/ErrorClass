# ErrorClass

A bundle of error classes

## Get Started

1. Install the package by npm:

    ```shell
    npm install yan-error-class
    ```
2. Import the error class and throw the instance
    
    ```javascript
    import {AuthError} from 'yan-error-class';
    
    throw new AuthError('Invalid token');

    // or
    
    throw new AuthError({
        message: 'Invalid token'
        code: 101101 // you can define custom code
        status: 401  // http status code,
        extra: {user: 'admin'} // the extra object will be returned in http response body
        id: '1' // you can add custom key
    });
    ```
    
3. And you can set `expandCode`, it will get a code which it contains default code and expandCode
    
    ```javascript
    import {AuthError} from 'yan-error-class';        
    throw new AuthError({
       message: 'Invalid token'
       expandCode: 100
    });
    // the code is 108100
    ```
4. When you need a http response about a error:
    
    ```javascript
    import {AuthError} from 'yan-error-class';
    
    let error = new AuthError('Invalid token');
    console.log(error.getHttpError()) // {code: 101101, message: 'Invalid token', extra: undefined}
    ```
    
## Error Type

Use `import` to use these error class.

```javascript
import {ErrorType} from 'yan-error-class';
```

The `code` can be defined as you need.

### AuthError

usage: authentication failure

default code: 108

status: 401

### BadRequestError

usage: bad url

default code: 102

status: 400

### CloudUnavailableError

usage: the cloud is unavailable

default code: 103

status: 503

### ConfigError

usage: get server config error

default code: 104

status: 409

### ConflictError

usage: operate a resource in invalid status

default code: 107

status: 409

### DatabaseError

usage: database error

default code: 105100

status: 503

### ForbiddenError

usage: no permission to access a resource

default code: 101

status: 403

### InfrastructureError

usage: basic infrastructure error

default code: 105

status: 503

### InternalError

usage: internal error

default code: 100

status: 500

### NotFoundError

usage: a resource is not existed

default code: 103

status: 404

### RequestBodyError

usage: invalid request body

default code: 102

status: 400

### UnavailableError

usage: the resource is unavailable

default code: 100

status: 503

### UnSupportError

usage: the action is not supported

default code: 103

status: 503

## Custom Error Class

```javascript
import _ from 'lodash';
import {AbstractError} from 'yan-error-class';

export default class CustomError extends AbstractError {
    constructor(obj) {
        super(_.defaults(obj, {
              status: 400,
              code: 100000
          }));
    }
}
```







