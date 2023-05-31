// entities/advisor.js
@Entity
class Advisor {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  
  getId() {
    return this.id;
  }
  
  getName() {
    return this.name;
  }
  
  setName(name) {
    this.name = name;
  }
  
  getEmail() {
    return this.email;
  }
  
  setEmail(email) {
    this.email = email;
  }
}

// entities/client.js
@Entity
class Client {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  
  getId() {
    return this.id;
  }
  
  getName() {
    return this.name;
  }
  
  setName(name) {
    this.name = name;
  }
  
  getEmail() {
    return this.email;
  }
  
  setEmail(email) {
    this.email = email;
  }
}

// entities/portfolio.js
@Entity
class Portfolio {
  constructor(id, name, clientId) {
    this.id = id;
    this.name = name;
    this.clientId = clientId;
  }
  
  getId() {
    return this.id;
  }
  
  getName() {
    return this.name;
  }
  
  setName(name) {
    this.name = name;
  }
  
  getClientId() {
    return this.clientId;
  }
  
  setClientId(clientId) {
    this.clientId = clientId;
  }
}

// entities/security.js
@Entity
class Security {
  constructor(id, name, symbol) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
  }
  
  getId() {
    return this.id;
  }
  
  getName() {
    return this.name;
  }
  
  setName(name) {
    this.name = name;
  }
  
  getSymbol() {
    return this.symbol;
  }
  
  setSymbol(symbol) {
    this.symbol = symbol;
  }
}
