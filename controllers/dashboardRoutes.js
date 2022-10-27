
const dashboardRoute = require('express').Router();
// const { User } = require('../models');

// This is the 'get' route for dashboard page
dashboardRoute.get('/', async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       include: [
//         // model: // comeplete,
//       ]
//     });
//     const users = userData.map((dashBoard) => dashboardRoute.get({ plain: true }));
    
//     res.render('dashboard-page', { users });
//   } catch (err) {
//     res.status(500).json(err);
//   }
});

module.exports = dashboardRoute;
