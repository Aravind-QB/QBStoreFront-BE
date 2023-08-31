import express from 'express';
import { V1DefaultRoutes } from './src/api/bff/defaultRouter';
import { PORT } from './src/config';
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1', V1DefaultRoutes());

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
    next(createError(404));
});

// error handler
app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(500).json(err.message);
});


app.listen(PORT, () => {
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    }
);