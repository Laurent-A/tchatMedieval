const socketMiddleware = store => next => (action) => {
    next(action);
}

export default socketMiddleware;