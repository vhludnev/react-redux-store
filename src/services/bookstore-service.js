export default class BookstoreService {

  data = [
      {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
        price: 4.01,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
        page: 'https://www.amazon.com/Production-Ready-Microservices-Susan-Fowler/dp/1491965975/'},
      {
        id: 2,
        title: 'Release It!',
        author: 'Michael T. Nygard',
        price: 28.89,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
        page: 'https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software/dp/1680502395/'},
      {
        id: 3,
        title: 'Modern JavaScript for the Impatient 1st Edition',
        author: ' Cay Horstmann',
        price: 40.49,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51Y5+ZPSaYL._SX376_BO1,204,203,200_.jpg',
        page: 'https://www.amazon.com/Modern-JavaScript-Impatient-Cay-Horstmann/dp/0136502148/'},
      {
        id: 4,
        title: 'JavaScript. The Definitive Guide 7th Edition',
        author: 'David Flanagan',
        price: 22.75,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg',
        page: 'https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language/dp/1491952024/'},
      {
        id: 5,
        title: 'The Road to React',
        author: 'Robin Wieruch',
        price: 28.49,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41+WkW8xuAS._SX384_BO1,204,203,200_.jpg',
        page: 'https://www.amazon.com/Road-learn-React-pragmatic-React-js/dp/172004399X/'},
  ];

  getBooks() {
    return new Promise((resolve/* , reject */) => {
      setTimeout(() => {
        resolve(this.data)
        //reject(new Error('Error is found')); // for Error testing
      }, 700);
    });
  }
}