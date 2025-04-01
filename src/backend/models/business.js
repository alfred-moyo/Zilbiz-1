class Business {
    constructor(db) {
      this.collection = db.collection('businesses');
    }
  
    async createBusiness(businessData) {
      return await this.collection.insertOne(businessData);
    }
  
    async findBusinessByEmail(email) {
      return await this.collection.findOne({ email });
    }
  }
  
  module.exports = Business;