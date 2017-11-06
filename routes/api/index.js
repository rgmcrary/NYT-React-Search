const router = require("express").Router();
const articleRoutes = require("./articles");

// Article routes
router.use("/articles", articleRoutes);

// ReactDOM.render(
//   <Router>
//     <Route path="/" component={MainLayout}>
//       <IndexRoute component={Home} />
//       <Route component={SearchLayout}>
//         <Route path="users" component={UserList} />
//         <Route path="widgets" component={WidgetList} />
//       </Route>
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );

module.exports = router;
