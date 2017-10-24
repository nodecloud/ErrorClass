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
3. When you need a http response about a error:
    
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

default code: 101101

status: 401

### BadRequestError

usage: bad url

default code: 101102

status: 400

### RequestBodyError

usage: invalid request body

default code: 101102

status: 400

### UnSupportError

usage: the resource is unavailable

default code: 101103

status: 503

### ConflictError

usage: operate a resource in invalid status

default code: 101104

status: 409

### CloudUnavailableError

usage: the cloud is unavailable

default code: 101201

status: 503

### DatabaseError

usage: database error

default code: 101105

status: 503

## Custom Error Class

```javascript
import _ from 'lodash';
import {AbstractError} from 'yan-error-class';

export default class CustomError extends AbstractError {
    constructor(obj) {
        super(obj);
        _.defaults(this, {
            status: 400,
            code: 100000
        });
    }
}
```







