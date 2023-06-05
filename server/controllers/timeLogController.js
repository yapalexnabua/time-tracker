export const create = (res, req) => {
    res.status(201).json({
        message: 'Time Log created'
    });
};

export const list = (res, req) => {
    res.status(200).json({
        message: 'Some time log list'
    });
};

