class User {
    constructor(userId, authId,verified, wallet, balance, name, email, investments) {
        this.userId = userId;
        this.authId = authId;
        this.verified = verified;
        this.wallet = wallet;
        this.balance = balance;
        this.name = name;
        this.email = email;
        this.investments = investments;
    }
}

export default User;
