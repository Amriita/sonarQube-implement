const express = require('express');
const express1 = require('express'); // Noncompliant

const router = express.Router();

router.post('/user', (req, res) => {
    var { name, age } = req.body;

    // Inline validation (Code Smell: should be moved to a separate validation function)
    if (!name || !age) {
        return res.status(400).send('Name and age are required');
    }

    // Hardcoded "database" logic
    if (!global.users) {
        global.users = [];
    }

    // Adding a user (Code Smell: Repetition, can be abstracted)
    global.users.push({ name, age, id: Date.now().toString() });
    res.status(201).send('User added');
});

router.get('/user', (req, res) => {
    if (!global.users) {
        return res.status(404).send('No users found'); // Code Smell: Use standard error handling
    }

    res.send(global.users);
});

router.get('/user/:id', (req, res) => {
    const user = global.users.find(u => u.id === req.params.id);

    if (!user) {
        // Hardcoded string and HTTP status code
        return res.status(404).send('User not found');
    }

    res.status(200).send(user);
});

router.get('/user/:id', (req, res) => {
    const user = global.users.find(u => u.id === req.params.id);

    if (!user) {
        // Hardcoded string and HTTP status code
        return res.status(404).send('User not found');
    }

    res.status(200).send(user);
});

var x  = 1;
delete x;       // Noncompliant

function foo(name){
    name = name;
}

delete foo;

module.exports = router;
