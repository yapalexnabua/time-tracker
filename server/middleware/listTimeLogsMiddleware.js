import Joi from 'joi';

const schema = Joi.object({
    from: Joi.date().optional(),
    to: Joi.date().optional(),
    projectId: Joi.string().optional(),
});

export default async (req, res, next) => {
    const { error, value } = schema.validate(req.query, { abortEarly: false });

    if (error) {
        res.status(422).json({
            error,
            value
        });
    } else {
        next();
    }
}