import Joi from 'joi';

const schema = Joi.object({
    projectId: Joi.string().required(),
    taskDescription: Joi.string().required(),
    hoursWorked: Joi.number().greater(0),
    dateWorked: Joi.date().optional()
});

export default async (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        res.status(422).json({
            error,
            value
        });
    } else {
        next();
    }
}