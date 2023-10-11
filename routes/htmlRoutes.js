const path = require('path');
const router = require('express').Router.();

//note sends to html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
//home
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}); 

module.exports = router;