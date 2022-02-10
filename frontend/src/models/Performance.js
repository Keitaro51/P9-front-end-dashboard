class Performance{

    constructor(userId, kind, data){
        this._userId = userId
        this._kind =  kind
        this._data = data
    }
    
    set userId (userId) { this._userId = userId }
    get userId () { return this._userId }

    set kind (kind) { this._kind = kind }
    get kind () { return this._kind }
    
    set data (data) { this._data = data }
    get data () { return this._data }
}

export default Performance