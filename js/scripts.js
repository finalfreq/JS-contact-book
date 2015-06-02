function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName  = lastName;
  this.addresses = [];
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

function Address(street, city, state) {
  this.street = street;
  this.city   = city;
  this.state  = state;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state
};

$(function() {
    $("#add-address").click(function() {
      $(".new-address").first().clone().find("input").val("").end().appendTo("#new-addresses").fadeIn("slow");
    });

    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [] };

        $(".new-address").each(function() {
            var inputtedStreet = $(this).find("input.new-street").val();
            var inputtedCity = $(this).find("input.new-city").val();
            var inputtedState = $(this).find("input.new-state").val();

            var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
            newContact.addresses.push(newAddress);
        });

        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

        $(".contact").last().click(function() {
            $("#show-contact").show();

            $("show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);

            $("ul#addresses").text("");

            newContact.addresses.forEach(function(address) {
                $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
            });
        });
        $("form#new-contact").find("input").val('');
    });
});
