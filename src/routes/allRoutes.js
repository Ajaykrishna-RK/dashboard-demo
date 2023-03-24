import Dashboard from "../views/dashboard/Dashboard";
import Orders from "../views/orders/Orders";
import Products from "../views/products/Products";


const routes = [
   
        {
            path: "/",
            name: "Dashboard",
           icon: "fa-solid fa-link",
            component: Dashboard,
           
          },
          {
            path: "/products",
            name: "Products",
            icon: "ni ni-spaceship",
            component: Products,
           
          },
          {
            path: "/orders",
            name: "Orders",
            icon: "fa-solid fa-warehouse",
            component:Orders,
           
          },
  
]

export default routes