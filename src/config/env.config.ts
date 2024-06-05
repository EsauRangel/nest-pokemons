

export const EnvConfigguration = () => ({
    environment: process.env.NODE_ENV,
    mongodb: process.env.MONGODB,
    port: process.env.PORT
})