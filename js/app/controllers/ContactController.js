function ContactController() {
    this.contacts = [{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    this.addContact = function () {
        this.contacts.push({
            name: this.name,
            phone: this.phoneNumber
        });
       console.log(this.contacts) 
    }

    this.removeContact = function (index) {
        this.contacts.splice(index, 1);
        console.log(this.contacts.length)
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);