class MainData{

    constructor(id, userInfos, todayScore, keyData){
        this._id = id
        this._userInfos =  userInfos
        this._todayScore = todayScore
        this._keyData = keyData
    }
    
    set id (id) { this._id = id }
    get id () { return this._id }

    set userInfos (userInfos) { this._userInfos = userInfos }
    get userInfos () { return this._userInfos }

    set todayScore (todayScore) { this._todayScore = todayScore }
    get todayScore () { return this._todayScore }

    set keyData (keyData) { this._keyData = keyData }
    get keyData () { return this._keyData }
}

export default MainData