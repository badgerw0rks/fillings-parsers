import  { MongoDataSource } from 'apollo-mongodb-datasource'

export default class DbStream extends MongoDataSource {
  getDbStream(cik) {
    return this.findOneByCik(cik)
  }
}