class AverageSession{

    constructor(userId, sessions){
        this._userId = userId
        this._sessions =  sessions
    }
    
    set userId (userId) { this._userId = userId }
    get userId () { return this._userId }

    set sessions (sessions) { this._sessions = sessions }
    get sessions () { return this._sessions }
}

export default AverageSession