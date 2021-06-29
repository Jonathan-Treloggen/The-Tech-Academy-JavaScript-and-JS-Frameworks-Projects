// synchronous
console.log(" I ");

console.log(" eat ");

console.log(" ice cream ");

console.log(" with a ");

console.log(" spoon ");



// Asynchronous
console.log(" I ");

setTimeout(() => {
  console.log(" eat ");
}, 1200);

setTimeout(() => {
  console.log(" ice cream ");
}, 2400);

setTimeout(() => {
  console.log(" with a ");
}, 3600);

setTimeout(() => {
  console.log(" spoon ");
}, 4800);

let order = (call_production) => {
  console.log("Order placed, calling production now.");
  call_production();
};

let production = () => {
  console.log("Order received, starting production.");
};

order(production);



// Accessing an object using dot EXAMPLE: stocks.Fruits[]
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Liquid: ["water", "ice"],
  Holder: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"]
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

// callback hell
let production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("the fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);
        
        setTimeout(() => {
          console.log("the machine was started");
          
          setTimeout(() => {
            console.log(`ice cream was placed on ${stocks.Holeder[0]}`)
            
            setTimeout(() => {
              console.log(`with a ${stocks.Toppings[0]} topping`);
              
              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);



let is_shop_open = true;
  
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0000, () => console.log("production has started"));
  })

  .then(() => {
    return order(2000, () => console.log("the fruit was chopped"));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("start machine"));
  })
  .then(() => {
    return order(2000, () => {
      console.log(`ice cream is placed inside of ${stocks.Holder[0]}`);
    });
  })
  .then(() => {
    return order(3000, () =>
      console.log(`the ${stocks.Toppings[0]} topping was selected`)
    );
  })
  .then(() => {
    return order(2000, () => console.log("ice cream was served!"));
  })

  .catch(() => {
    console.log("Customer left");
  })

  .finally(() => {
    console.log("day ended, shop is closed");
  });



  let toppings_choice = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log("which topping would you like?"));
        reject(console.log("Really?", error));
      }, 3000);
    });
  };
  
  async function kitchen() {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");
  
    await toppings_choice();
  
    console.log(" D ");
    console.log(" E ");
  }
  
  kitchen();
  
  console.log("doing the dishes");
  console.log("cleaning the table");
  console.log("taking others orders");



  function time(ms) {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        setTimeout(resolve, ms);
      } else {
        reject(console.log("shop is closed"));
      }
    });
  }
  
  async function kitchen() {
    try {
      await time(2000);
      console.log(`${stocks.Fruits[0]} selected`);
  
      console.log("start the production");
  
      await time(2000);
      console.log("cutting the fruit");
  
      await time(1000);
      console.log(`adding ${stocks.Liquid[0]} and ${stocks.Liquid[1]}`);
  
      await time(1000);
      console.log("start machine");
  
      await time(2000);
      console.log(`put ice cream into ${stocks.Holder[2]} container`);
  
      await time(3000);
      console.log(`with a ${stocks.Toppings[1]} topping`);
  
      await time(2000);
      console.log("ice cream is sereved!");
    } catch (error) {
      console.log("customer left", error);
    } finally {
      console.log("day ended, shop is closed");
    }
  }
  
  kitchen();
  
