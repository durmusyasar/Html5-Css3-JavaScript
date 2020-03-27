class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = this.status
    }
}

module.exports = CustomError;