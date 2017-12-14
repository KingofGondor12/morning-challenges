/*

JSON Practice
-------------

JSON can be parsed and turned into a plain old JS object.
This makes it much easier to read from and write to.

Check out the shop JS object and run the tests.

Complete methods below, one by one.

TESTS: mocha tests/43_json_test.js

*/

const shop = {
  title: "My Fancy Drink Shop",
  products: [
    { id: 1, title: 'Coca Cola', price: 4.32 },
    { id: 2, title: 'Fanta', price: 4.22 },
    { id: 3, title: 'Lift', price: 4.11 }
  ],
  customers: {
    'jane@doe.com': {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        streetNumber: 12,
        street: 'Main St',
        city: 'Brisbane',
        postcode: 4000
      },
      orders: [
        { id: 61721, status: 'delivered', items: [
            { productId: 1, qty: 2 },
            { productId: 3, qty: 1 },
            { productId: 2, qty: 3 }
          ],
          notes: 'Please leave on doorstep'
        },
        { id: 82721, status: 'delivered', items: [
            { productId: 4, qty: 100 }
          ],
          notes: 'Really enjoying coke ATM'
        }
      ]
    }
  }
}

const shopTitle = () => {
  // Return the shop title (you have access to the shop object from here)
  return (shop.title)
}

const upperCase = (string) => {
  // Return an uppercase version of string
  return string.toUpperCase()
}

const upperCaseShopTitle = () => {
  // Return an uppercase shop title.
  // Don't repeat yourself. Use the two functions you just built!
  return upperCase(shopTitle())
}

const productById = (productId) => {
  // Return a specific product object
  return (shop.products.find(product => product.id === productId))
}

const productCost = (productId) => {
  // given a product id, return its cost. DRY ;)
  return (productById(productId).price)
}

const formatAddress = (email) => {
  // Given a user's email, return their address in the format:
  // streetNumber street, city, postcode
  // E.g. 10 Amelia St, Sydney, 2000
  // Hint: some destructuring might save you a few lines.
  let customer = shop.customers[email].address
  return (`${customer.streetNumber} ${customer.street}, ${customer.city}, ${customer.postcode}`)
}

const totalCost = (email, orderId) => {
  // Return the total cost of an order.
  let total = 0
  const order = shop.customers[email].orders.find(order => order.id === orderId)
  return order.items.reduce((total, item) => {
    return total += (item.qty * productCost(item.productId))
  }, 0)
}

const addProduct = (id, title, price) => {
  // Add a product to the shop.
  product = {id, title, price}
  shop.products.push(product)
}

const updateProductPrice = (id, newPrice) => {
  // Update the price of a specific product
  product = productById(id)
  product.price = newPrice
}

// Test all the things
module.exports = {
  shopTitle,
  upperCase,
  upperCaseShopTitle,
  productById,
  productCost,
  formatAddress,
  totalCost,
  addProduct,
  updateProductPrice
}
