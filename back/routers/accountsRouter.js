const express = require("express");
const { AccountModel } = require("../Models");
const router = express.Router();

router.get("/", (req, res) => {
  AccountModel.find({}, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  AccountModel.findById(id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

// router.post("/check", async (req, res) => {
//     const { email, password, name, surname, age } = req.body;
//     const acc = await AccountModel.findOne({ email });
//     if (acc) {
//         return res.status(400).send("Пользователь с таким именем уже существует" );
//     }else {
//     const newAccount = new AccountModel({ email, password, name, surname, age });
//     newAccount.save((err) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.status(201).send("Added new account")
//         }
//     });
// }
// });
router.post("/", (req, res) => {
  const { email, password, name, surname, age } = req.body;
  const newAccount = new AccountModel({ email, password, name, surname, age });
  newAccount.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Added new account");
    }
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, surname, age } = req.body;
  AccountModel.findByIdAndUpdate(id, { name, surname, age }, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("ok");
    }
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  AccountModel.findByIdAndDelete(id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("deleted");
    }
  });
});

router.post("/follow", async (req, res) => {
  const { userId, id, name, city, email } = req.body;
  const user = await AccountModel.findById(userId);

  const payload = {
    id,
    name,
    city,
    email,
  };

  user.follows.push(payload);
  user.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("University followed");
    }
  });
});


router.post("/unfollow", async (req, res) => {
    const { userId, followedId } = req.body;
    const user = await AccountModel.findById(userId);

    await AccountModel.findByIdAndUpdate(userId,{follows: user.follows.filter((item) => item.id !== followedId)})
    res.status(201).send("University unfollowed");

});
module.exports = router;
