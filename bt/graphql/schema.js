var schema = buildSchema(`
  type List{
      id: ID!
      title: String!
      owner: String!
  }
  type Query{
      allList: [List]!
      listbyId(id: ID!): List!    
  }
`);

export default schema