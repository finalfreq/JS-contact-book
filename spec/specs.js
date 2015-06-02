describe("Contact", function() {

  it("Creates a given contact with specific specifications", function() {
    var newContact = new Contact("jack", "gill");
    expect(newContact.firstName).to.equal("jack");
    expect(newContact.lastName).to.equal("gill");
    expect(newContact.addresses).to.eql([]);
  });

  it("adds #fullName for all contacts", function() {
    var newContact = new Contact("jack", "gill");
    expect(newContact.fullName()).to.equal("jack gill");
  });
});

describe("Address", function() {

  it("Creates a given contact with specific specifications", function() {
    var newAddress = new Address("123 main st", "test city", "test state");
    expect(newAddress.street).to.equal("123 main st");
    expect(newAddress.city).to.equal("test city");
    expect(newAddress.state).to.eql("test state");
  });

  it("adds #fullAddress for all addresses", function() {
    var newAddress = new Address("123 main st", "test city", "test state");
    expect(newAddress.fullAddress()).to.equal("123 main st, test city, test state");
  });

});
