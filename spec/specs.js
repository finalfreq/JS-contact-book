describe("Address", function() {

  it("Creates a given contact with specific specifications", function() {
    var newContact = new Contact("jack", "gill");
    expect(newContact.firstName).to.equal("jack");
    expect(newContact.lastName).to.equal("gill");
    expect(newContact.addresses).to.eql("[]");
  });
})
